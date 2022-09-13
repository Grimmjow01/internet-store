import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './Layout.css';

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="Outlet">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;
