import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home.tsx';
import Layout from './Layout/Layout';
import ContactInfo from './pages/ContactUs/ContactInfo';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Basket from './pages/Basket/Basket';
import AdminPortal from './pages/AdminPanel/AdminPortal';
import Chat from './components/Chat/Chat';
import ProductItemPage from './pages/ProductItemPage/ProductItemPage.jsx';
import { checkAuthThunk } from './store/auth/action';
import { useDispatch } from 'react-redux';

import { EditAdminProduct } from './pages/AdminPanel/EditAdminProduct';

import { addBasketFromLocal } from './store/products/action';
import OnlineCalculator from './components/OnlineCalculator/OnlineCalculator';
import SidebarItem from './components/Sidebar/SidebarItem';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';





function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuthThunk());
    };

    if(localStorage.getItem('basketItems')){
      dispatch(addBasketFromLocal(JSON.parse(localStorage.getItem('basketItems'))))
    } else {
       
    };
  
  }, [dispatch]);

  return ( 
    
  <div className="App">
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/basket" element={<Basket />}/>
      <Route path="/contacts" element={<ContactInfo />}/>
      <Route path="/calculate" element={<OnlineCalculator />}/>
      <Route path="/admin" element={<AdminPortal />}/>
      <Route path="/chat" element={<Chat />}/>
      <Route path="/products/:id" element={<ProductItemPage />}/>
      <Route path="/api/products/:id" element={<EditAdminProduct />} />
      <Route path="/category/:id" element={<SidebarItem />} />

    </Route>
  </Routes>
  </div>
  );
}

export default App;
