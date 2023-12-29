import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return ( 
        <div className=''>
        <Navbar/>
        <div className='py-12 px-12 bg-zinc-100'>
        <Outlet/>
        </div>
        <Footer/>
        </div>
     );
}
 
export default Layout;  