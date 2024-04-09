import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Link as MuiLink,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const nav = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    nav('/');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#66BB6A', boxShadow: 'none', borderBottom: '2px solid #388E3C' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginRight: '16px' }}>
        </IconButton>
        <Typography variant="h6" component="div" style={{ flexGrow: 1, color: '#fff' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Todo App
          </Link>
        </Typography>
        {isMobile ? (
          <>
            <IconButton color="inherit" onClick={handleClick}>
              {":-)"}

            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={Link} to="/add" onClick={handleClose}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="Add" />
              </MenuItem>
              <MenuItem component={Link} to="/list" onClick={handleClose}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="List" />
              </MenuItem>
              <MenuItem component={Link} to="/signin" onClick={handleClose}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary="Sign In" />
              </MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Button component={Link} to="/add" style={{ color: '#fff' }}>
              Add
            </Button>
            <Button component={Link} to="/list" style={{ color: '#fff' }}>
              List
            </Button>
            <Button component={Link} to="/signin" style={{ color: '#fff' }}>
              Sign In
            </Button>

          </>
        )}
        <Button component={MuiLink} href="#" onClick={handleLogout} style={{ color: '#fff' }}>
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
