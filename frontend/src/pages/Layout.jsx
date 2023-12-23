import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return ( 
        <div className=''>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
     );
}
 
export default Layout;  