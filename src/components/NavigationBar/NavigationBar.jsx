import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import text from '../../text.json';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../routes';

const { navigationBar } = text;

const NavigationBar = (props) => {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        onClick={() => navigate(Routes.home.path)}
      >
        {navigationBar.logo}
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{ textAlign: 'center' }}
            onClick={() => navigate(Routes.home.path)}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            sx={{ textAlign: 'center' }}
            onClick={() => navigate(Routes.bookClubSearch.path)}
          >
            <ListItemText primary={navigationBar.items[0]} />
          </ListItemButton>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary={navigationBar.items[1]} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} data-qa="navigation-bar-wrapper">
      <AppBar component="nav" position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={() => navigate(Routes.home.path)}
          >
            {navigationBar.logo}
          </Typography>

          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button
              sx={{ color: '#fff' }}
              onClick={() => navigate(Routes.bookClubSearch.path)}
            >
              {navigationBar.items[0]}
            </Button>
            <Button sx={{ color: '#fff' }}>{navigationBar.items[1]}</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
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
              width: navigationBar.drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

NavigationBar.propTypes = {
  window: PropTypes.func,
};
NavigationBar.defaultProps = {
  window: undefined,
};
export default NavigationBar;
