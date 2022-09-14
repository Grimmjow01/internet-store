import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Layout from './Layout/Layout';
import ContactInfo from './pages/ContactUs/ContactInfo';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return ( 
  <div className="App">
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />

      <Route path="/contacts" element={<ContactInfo />}/>
    </Route>
  </Routes>
  </div>
  );
}

export default App;
