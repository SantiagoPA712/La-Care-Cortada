import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/models">Modelos</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/events">Eventos</Link></li> 
        <li><Link to="/photos">Fotos</Link></li>
        <li><Link to="/memberships">Membresías</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
