import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Logo from '../assets/images/Logo.png';
import Bmi from './Bmi';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px', margin: '0px 20px' }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625',
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>
          Exercises
        </a>
        <Link to="/trainers" style={{ textDecoration: 'none', color: '#3A1212' }}>
          Trainers
        </Link>
        <Stack direction="row"  gap="8px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
          <span>Calculators</span>
          <IconButton  sx ={{mb:'-11px' } } size ="large" onClick={handleMenuOpen}>

            <KeyboardArrowDownIcon sx={{fontSize:'40 px'}} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Stack direction="row" gap="8px" fontFamily="Alegreya" fontSize="24px" alignItems="flex-end">
                <Link to="/bmi" style={{ textDecoration: 'none', color: '#3A1212' }}>
                  BMI
                </Link>
              </Stack>
            </MenuItem>

          </Menu>
        </Stack>
        </Stack>
                  <Bmi />
                </Stack>
              );
            };

export default Navbar;
