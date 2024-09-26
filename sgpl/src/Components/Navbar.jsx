import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleSairClick = () => {
    navigate('/login', { replace: true });
  };

  return (
    <header className='header'>
      <a href='/' className='logo'>Logo</a>
      <nav className='navbar'>
        <a href='/'>Solicitações</a>
        <a href='/'>Devoluções</a>
        <a href='/'>Nova Ocorrência</a>
        <a onClick={handleSairClick}>Sair</a>
      </nav>
    </header>
  );
};

export default Navbar;