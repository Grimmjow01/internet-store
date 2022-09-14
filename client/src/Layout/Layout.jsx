import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import './Layout.css';

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="Outlet">
        <Outlet />
      </div>

      <Footer/>

    </div>
  );
}

export default Layout;
