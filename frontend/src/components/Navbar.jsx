import React from 'react';
import '../styles/navbar.css';
import { Avatar, Button, Stack } from '@chakra-ui/react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className="navbar-menu">
        <a className="navbar-item">Home</a>
        <a className="navbar-item">About</a>
        <a className="navbar-item">Services</a>
        <a className="navbar-item">Contact</a>
      </div>
      <div>
      <Stack direction="row">
      <Avatar src='https://bit.ly/broken-link' />
      <Button size='lg' colorScheme='teal' variant='outline'>
        <a href="/login">Sign In</a>
      </Button>
      </Stack>
      </div>
    </nav>
  );
}

export default Navbar;