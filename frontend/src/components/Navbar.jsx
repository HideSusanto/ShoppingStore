import React from 'react';
import '../styles/navbar.css';
import { Avatar, Button, Stack } from '@chakra-ui/react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [authTokens, setAuthTokens] = useState(
    localStorage.getItem('userToken') || ""
  );
  const setTokens = (data) => {
    localStorage.setItem("userToken", JSON.stringify(data));
    setAuthTokens(data);
  };
  console.log("authTokens", authTokens);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setAuthTokens("");
    navigate("/login");
  };
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
      {/* <Avatar src='https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/411698664_2157559551250072_7866817695003509574_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG_XpuGvPL0J4-Jn1omHyrmxNAwmeJFDYjE0DCZ4kUNiCuKus4jEqSwAj8awHifuzlULQFNWjdkp55JuqhLrjJf&_nc_ohc=1q0b5oLIOkIAX9GKkdV&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBlhgzVDKqtKyYQaFb4c0hvxpbeCbWqZRN3Kyx0yGkyzg&oe=658BE226' /> */}
      {authTokens ? (
                <div>
                  <Avatar src='https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-6/411698664_2157559551250072_7866817695003509574_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeG_XpuGvPL0J4-Jn1omHyrmxNAwmeJFDYjE0DCZ4kUNiCuKus4jEqSwAj8awHifuzlULQFNWjdkp55JuqhLrjJf&_nc_ohc=1q0b5oLIOkIAX9GKkdV&_nc_ht=scontent.fhan3-5.fna&oh=00_AfBlhgzVDKqtKyYQaFb4c0hvxpbeCbWqZRN3Kyx0yGkyzg&oe=658BE226' />
                <Button ml={5} size='lg' colorScheme='teal' variant='outline'>                 
                  <a onClick={handleLogout}> Logout </a>
                </Button>
                </div>
                
              ) : (
                <Button size='lg' colorScheme='teal' variant='outline'>
                  <a href="/login">Sign In</a>
                </Button>
              )}
      
      </Stack>
      </div>
    </nav>
  );
}

export default Navbar;