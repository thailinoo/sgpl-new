import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <><header className='header'>
      <a href='/' className='logo'>Logo</a>
    <nav className='navbar'>
        <a href='/'>Solicitações</a>
        <a href='/'>Devoluções</a>
        <a href='/'>Nova Ocorrência</a>
        <a href='/'>Sair</a>
      </nav></header></>
     
  )


}



export default Navbar
