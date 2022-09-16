import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import io from 'socket.io-client';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import ContactInfo from './pages/ContactUs/ContactInfo';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Basket from './pages/Basket/Basket';
import AdminPanel from './pages/AdminPanel/AdminPanel';
import Chat from './components/Chat/Chat';
import ProductItemPage from './pages/ProductItemPage/ProductItemPage';

const socket = io.connect('http://localhost:3001')



function App() {

const [room, setRoom] = useState('');

socket.emit("join_room", room)

  return ( 
    
  <div className="App">
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/basket" element={<Basket />}/>
      <Route path="/contacts" element={<ContactInfo />}/>
      <Route path="/admin" element={<AdminPanel />}/>
      <Route path="/chat" element={<Chat />}/>
      <Route path="/products/:id" element={<ProductItemPage />}/>
    </Route>
  </Routes>
  </div>
  );
}

export default App;
