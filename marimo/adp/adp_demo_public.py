import marimo

__generated_with = "0.15.0"
app = marimo.App(width="full")


@app.cell
def _():
    import marimo as mo
    import matplotlib.pyplot as plt
    import numpy as np
    import pandas as pd
    return mo, np, pd, plt


@app.cell
def _(np, pd):
    # ------------------------------------------------------------------
    # Données entièrement synthétiques.
    # Elles reproduisent uniquement le type de comportement étudié
    # pendant le stage et ne contiennent aucune donnée Groupe ADP.
    # ------------------------------------------------------------------

    _rng = np.random.default_rng(42)

    _dates = pd.date_range(
        "2026-01-01 00:00",
        "2026-06-30 23:00",
        freq="h",
    )

    _heure = _dates.hour.to_numpy()
    _jour_semaine = _dates.dayofweek.to_numpy()

    # Profil journalier simplifié :
    # pointe du matin + pointe du soir.
    _pointe_matin = 500 * np.exp(-((_heure - 8) / 2.3) ** 2)
    _pointe_soir = 600 * np.exp(-((_heure - 18) / 2.8) ** 2)

    _trafic_base = 250 + _pointe_matin + _pointe_soir

    # Circulation plus faible le week-end.
    _facteur_semaine = np.where(_jour_semaine >= 5, 0.72, 1.0)
    _trafic_base = _trafic_base * _facteur_semaine

    _bruit_a = _rng.normal(0, 30, len(_dates))
    _bruit_b = _rng.normal(0, 28, len(_dates))
    _bruit_c = _rng.normal(0, 32, len(_dates))
    _bruit_d = _rng.normal(0, 25, len(_dates))

    _capteur_a = _trafic_base * 0.52 + _bruit_a
    _capteur_b = _trafic_base * 0.48 + _bruit_b

    # C mesure approximativement A+B avec un léger biais.
    _capteur_c = _trafic_base * 1.035 + _bruit_c

    # D reproduit un second capteur redondant avec un autre biais.
    _capteur_d = _trafic_base * 0.985 + _bruit_d

    donnees = pd.DataFrame(
        {
            "Capteur A": np.clip(_capteur_a, 0, None),
            "Capteur B": np.clip(_capteur_b, 0, None),
            "Capteur C": np.clip(_capteur_c, 0, None),
            "Capteur D": np.clip(_capteur_d, 0, None),
        },
        index=_dates,
    )

    # Quelques anomalies artificielles.
    _jours_anormaux = pd.to_datetime(
        [
            "2026-02-14",
            "2026-03-08",
            "2026-04-19",
            "2026-05-12",
            "2026-06-03",
        ]
    )

    for _jour in _jours_anormaux:
        _masque = donnees.index.normalize() == _jour
        donnees.loc[_masque, "Capteur C"] *= 1.25

    # Quelques périodes volontairement incomplètes.
    _jours_incomplets = pd.to_datetime(
        [
            "2026-01-27",
            "2026-03-21",
            "2026-05-05",
        ]
    )

    for _jour in _jours_incomplets:
        _masque = (
            (donnees.index.normalize() == _jour)
            & (donnees.index.hour >= 10)
        )
        donnees.loc[_masque, "Capteur C"] = np.nan

    return (donnees,)


@app.cell
def _(mo):
    comparaisons = {
        "Capteurs A + B ↔ Capteur C": (
            ["Capteur A", "Capteur B"],
            ["Capteur C"],
        ),
        "Capteur C ↔ Capteur D": (
            ["Capteur C"],
            ["Capteur D"],
        ),
    }

    choix_comparaison = mo.ui.dropdown(
        options=list(comparaisons),
        value="Capteurs A + B ↔ Capteur C",
        label="Comparaison",
        full_width=True,
    )

    return choix_comparaison, comparaisons


@app.cell
def _(donnees, mo):
    _date_min = donnees.index.min().date()
    _date_max = donnees.index.max().date()

    periode = mo.ui.date_range(
        start=_date_min,
        stop=_date_max,
        value=(_date_min, _date_max),
        label="Période",
        full_width=True,
    )

    heures_min = mo.ui.number(
        start=1,
        stop=24,
        step=1,
        value=24,
        label="Nombre minimal d'heures valides par jour",
        full_width=True,
    )

    seuil_ecart = mo.ui.number(
        start=0,
        stop=100,
        step=1,
        value=10,
        label="Seuil d'écart relatif (%)",
        full_width=True,
    )

    afficher_jours_incomplets = mo.ui.switch(
        value=False,
        label="Afficher les jours incomplets",
    )

    return afficher_jours_incomplets, heures_min, periode, seuil_ecart


@app.cell
def _(
    afficher_jours_incomplets,
    choix_comparaison,
    heures_min,
    mo,
    periode,
    seuil_ecart,
):
    mo.vstack(
        [
            mo.md(
                """
# Comparaison de capteurs routiers

Cette démonstration reproduit de manière **très simplifiée** un outil développé
pendant mon stage au **Groupe ADP**.

> Les données présentées ici sont entièrement synthétiques.
"""
            ),
            choix_comparaison,
            mo.hstack(
                [
                    periode,
                    heures_min,
                    seuil_ecart,
                ],
                widths="equal",
            ),
            afficher_jours_incomplets,
        ]
    )
    return


@app.cell
def _(choix_comparaison, comparaisons, donnees, heures_min, pd, periode):
    _capteurs_gauche, _capteurs_droite = comparaisons[choix_comparaison.value]

    _date_debut, _date_fin = periode.value

    _donnees_periode = donnees.loc[
        pd.Timestamp(_date_debut):
        pd.Timestamp(_date_fin) + pd.Timedelta(days=1) - pd.Timedelta(seconds=1)
    ]

    _serie_gauche = _donnees_periode[_capteurs_gauche].sum(
        axis=1,
        min_count=len(_capteurs_gauche),
    )

    _serie_droite = _donnees_periode[_capteurs_droite].sum(
        axis=1,
        min_count=len(_capteurs_droite),
    )

    _heures_valides_gauche = (
        _donnees_periode[_capteurs_gauche]
        .notna()
        .all(axis=1)
        .resample("D")
        .sum()
    )

    _heures_valides_droite = (
        _donnees_periode[_capteurs_droite]
        .notna()
        .all(axis=1)
        .resample("D")
        .sum()
    )

    comparaison = pd.DataFrame(
        {
            "gauche": _serie_gauche.resample("D").sum(min_count=1),
            "droite": _serie_droite.resample("D").sum(min_count=1),
            "heures_valides_gauche": _heures_valides_gauche,
            "heures_valides_droite": _heures_valides_droite,
        }
    )

    comparaison["jour_valide"] = (
        (comparaison["heures_valides_gauche"] >= int(heures_min.value))
        & (comparaison["heures_valides_droite"] >= int(heures_min.value))
    )

    return (comparaison,)


@app.cell
def _(comparaison, seuil_ecart):
    comparaison_calculee = comparaison.copy()

    comparaison_calculee["ecart_signe"] = (
        comparaison_calculee["gauche"]
        - comparaison_calculee["droite"]
    )

    comparaison_calculee["ecart_absolu"] = (
        comparaison_calculee["ecart_signe"].abs()
    )

    _reference = (
        comparaison_calculee[["gauche", "droite"]]
        .abs()
        .mean(axis=1)
    )

    comparaison_calculee["ecart_relatif_pct"] = (
        100
        * comparaison_calculee["ecart_absolu"]
        / _reference.where(_reference.ne(0))
    )

    comparaison_calculee["ecart_relatif_signe_pct"] = (
        100
        * comparaison_calculee["ecart_signe"]
        / _reference.where(_reference.ne(0))
    )

    comparaison_calculee["anomalie"] = (
        comparaison_calculee["jour_valide"]
        & comparaison_calculee["ecart_relatif_pct"].gt(
            float(seuil_ecart.value)
        )
    )

    return (comparaison_calculee,)


@app.cell
def _(comparaison_calculee, mo, pd, seuil_ecart):
    _jours_total = len(comparaison_calculee)
    _jours_compares = int(comparaison_calculee["jour_valide"].sum())
    _nombre_anomalies = int(comparaison_calculee["anomalie"].sum())

    _valides = comparaison_calculee[
        comparaison_calculee["jour_valide"]
    ]

    _biais_moyen = _valides["ecart_signe"].mean()
    _ecart_median = _valides["ecart_relatif_pct"].median()
    _ecart_moyen = _valides["ecart_relatif_pct"].mean()

    mo.hstack(
        [
            mo.stat(
                value=str(_jours_compares),
                label="Jours comparés",
                caption=f"Sur {_jours_total} jours",
            ),
            mo.stat(
                value=(
                    f"{_biais_moyen:+.0f}"
                    if not pd.isna(_biais_moyen)
                    else "—"
                ),
                label="Biais moyen",
            ),
            mo.stat(
                value=(
                    f"{_ecart_median:.1f} %"
                    if not pd.isna(_ecart_median)
                    else "—"
                ),
                label="Écart médian",
            ),
            mo.stat(
                value=(
                    f"{_ecart_moyen:.1f} %"
                    if not pd.isna(_ecart_moyen)
                    else "—"
                ),
                label="Écart moyen",
            ),
            mo.stat(
                value=str(_nombre_anomalies),
                label=f"Jours > {seuil_ecart.value:g} %",
            ),
        ],
        widths="equal",
    )
    return


@app.cell
def _(
    afficher_jours_incomplets,
    choix_comparaison,
    comparaison_calculee,
    mo,
    plt,
    seuil_ecart,
):
    _fig, _ax = plt.subplots(figsize=(14, 5))

    if afficher_jours_incomplets.value:
        _serie_gauche_affichee = comparaison_calculee["gauche"]
        _serie_droite_affichee = comparaison_calculee["droite"]
    else:
        _serie_gauche_affichee = comparaison_calculee["gauche"].where(
            comparaison_calculee["jour_valide"]
        )
        _serie_droite_affichee = comparaison_calculee["droite"].where(
            comparaison_calculee["jour_valide"]
        )

    _ax.plot(
        comparaison_calculee.index,
        _serie_gauche_affichee,
        label="Côté gauche",
        linewidth=1.3,
    )

    _ax.plot(
        comparaison_calculee.index,
        _serie_droite_affichee,
        label="Côté droit",
        linewidth=1.3,
    )

    _anomalies_graph = comparaison_calculee[
        comparaison_calculee["anomalie"]
    ]

    if not _anomalies_graph.empty:
        _milieu_anomalies = (
            _anomalies_graph["gauche"]
            + _anomalies_graph["droite"]
        ) / 2

        _ax.scatter(
            _anomalies_graph.index,
            _milieu_anomalies,
            marker="x",
            s=35,
            linewidths=1.5,
            label=f"Écart > {seuil_ecart.value:g} %",
            zorder=4,
        )

    _ax.set_title(
        f"Débits journaliers — {choix_comparaison.value}"
    )
    _ax.set_xlabel("Date")
    _ax.set_ylabel("Débit journalier")
    _ax.grid(alpha=0.25)
    _ax.legend()
    _fig.tight_layout()

    mo.mpl.interactive(_fig)
    return


@app.cell
def _(comparaison_calculee, mo, plt, seuil_ecart):
    _fig_ecart, _ax_ecart = plt.subplots(figsize=(14, 4))

    _ecart_affiche = comparaison_calculee[
        "ecart_relatif_signe_pct"
    ].where(
        comparaison_calculee["jour_valide"]
    )

    _ax_ecart.plot(
        comparaison_calculee.index,
        _ecart_affiche,
        linewidth=1.2,
    )

    _ax_ecart.axhline(
        0,
        linewidth=1,
    )

    _ax_ecart.axhline(
        float(seuil_ecart.value),
        linestyle="--",
        linewidth=1,
    )

    _ax_ecart.axhline(
        -float(seuil_ecart.value),
        linestyle="--",
        linewidth=1,
    )

    _ax_ecart.set_title(
        "Écart relatif signé entre les deux mesures"
    )
    _ax_ecart.set_xlabel("Date")
    _ax_ecart.set_ylabel("Écart (%)")
    _ax_ecart.grid(alpha=0.25)
    _fig_ecart.tight_layout()

    mo.mpl.interactive(_fig_ecart)
    return


if __name__ == "__main__":
    app.run()
