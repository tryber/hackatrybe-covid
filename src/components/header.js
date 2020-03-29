import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/header.css';

class Header extends Component {

  render() {
    return (
      <nav className="header-color">
        <ul>
          <li><Link to="/">Mapa</Link></li>
          <li><Link to="/news">Notícias</Link></li>
          <li><Link to="/prevention">Prevenção</Link></li>
          <li><Link to="/how-to-study">#Alunos</Link></li>
          <li><Link to="/how-to-teach">#Professores</Link></li>
          <li><Link to="/about-us">Sobre nós</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Header;