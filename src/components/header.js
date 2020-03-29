import React from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

const Header = () => (
  <nav className="header-color">
    <ul>
      <li><Link to="/">Mapa</Link></li>
      <li><Link to="/news">Notícias</Link></li>
      <li><Link to="/prevention">Prevenção</Link></li>
      <li><Link to="/remote-work">Trabalho Remoto</Link></li>  
      <li><Link to="/about-us">Sobre nós</Link></li>
    </ul>
  </nav>
);

export default Header;
