import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import ContactInfo from './pages/ContactUs/ContactInfo';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Basket from './pages/Basket/Basket';
import AdminPanel from './pages/AdminPanel/AdminPanel';

function App() {
  return ( 
  <div className="App">
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/basket" element={<Basket />}/>
      <Route path="/contacts" element={<ContactInfo />}/>
      <Route path="/admin" element={<AdminPanel />}/>
    </Route>
  </Routes>
  </div>
  );
}

export default App;
