import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 240;

type Language = 'fr' | 'en';

type AdpNavigationProps = {
  mode: string;
  language: Language;
  modeChange: () => void;
  languageChange: () => void;
};

const navItems = {
  fr: [
    { label: 'Présentation', id: 'adp-overview' },
    { label: 'Missions', id: 'adp-missions' },
    { label: 'Démo', id: 'adp-demo' },
  ],
  en: [
    { label: 'Overview', id: 'adp-overview' },
    { label: 'Missions', id: 'adp-missions' },
    { label: 'Demo', id: 'adp-demo' },
  ],
};

function AdpNavigation({
  mode,
  language,
  modeChange,
  languageChange
}: AdpNavigationProps) {

  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const items = language === 'fr' ? navItems.fr : navItems.en;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");

      if (navbar) {
        setScrolled(window.scrollY > navbar.clientHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center' }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        Menu
      </p>

      <Divider />

      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: 'center' }}
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
          >
            <ListItemText
              primary={language === 'fr' ? 'Retour au portfolio' : 'Back to portfolio'}
            />
          </ListItemButton>
        </ListItem>

        {items.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => scrollToSection(item.id)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}

        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: 'center' }}
            onClick={languageChange}
          >
            <ListItemText
              primary={language === 'fr' ? 'English' : 'Français'}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? ' scrolled' : ''}`}
      >
        <Toolbar className="navigation-bar">

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <Button
              onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
              sx={{
                color: '#fff',
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center'
              }}
            >
              <ArrowBackIcon sx={{ marginRight: '5px' }} />
              Portfolio
            </Button>

            {mode === 'dark' ? (
              <LightModeIcon onClick={modeChange} />
            ) : (
              <DarkModeIcon onClick={modeChange} />
            )}

            <Button
              onClick={languageChange}
              sx={{
                color: '#fff',
                minWidth: 'auto',
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <TranslateIcon fontSize="small" />
              {language === 'fr' ? 'EN' : 'FR'}
            </Button>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {items.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{ color: '#fff' }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default AdpNavigation;