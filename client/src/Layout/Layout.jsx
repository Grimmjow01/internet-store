import React from 'react';
import { Outlet } from 'react-router-dom';
import ChatIcon from '../components/ChatIcon/ChatIcon';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import './Layout.css';

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="Outlet">
      <ChatIcon/>
        <Outlet />
        {/* <ChatIcon /> */}
        
      </div>
      <Footer/>

    </div>
  );
}

export default Layout;
