import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ModelsManagement from './components/ModelsManagement';
import MakeupProducts from './components/MakeupProducts';
import FashionEvents from './components/FashionEvents';
import PhotoSales from './components/PhotoSales';
import ExclusiveMemberships from './components/ExclusiveMemberships';
import ContactUs from './components/ContactUs';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/models" element={<ModelsManagement />} />
        <Route path="/products" element={<MakeupProducts />} />
        <Route path="/events" element={<FashionEvents />} />
        <Route path="/photos" element={<PhotoSales />} />
        <Route path="/memberships" element={<ExclusiveMemberships />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
