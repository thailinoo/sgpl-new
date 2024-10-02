import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'

const Navbar = () => {
  const navigate = useNavigate();

  const handleSairClick = () => {
    navigate('/login', { replace: true });
  };

  return (
    <header className='header'>
      <a href='/' className='logo'><img src={logo} alt='Logo'></img></a>
      <nav className='navbar'>
        <a href='/Historico'>Histórico</a>
        <a href='/Devolucoes'>Devoluções</a>
        <a href='/'>Sair</a>
      </nav>
    </header>
  );
};

export default Navbar;