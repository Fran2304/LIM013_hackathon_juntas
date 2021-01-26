import React from 'react';
import  './navbar.scss';
import loupe from '../../images/Search.svg'
import menu from '../../images/menu_mobile.svg'
const Navbar = () => {
  return (
    <section className='navbar'>
      <img src="" alt="Logo"/>
      <img src={loupe} alt="Loupe"/>
      <input type="text" placeholder="Buscar"/>
      <nav>
        <ul>
          <li>Home</li>
          <li>Préstamos</li>
          <li>Ahorros</li>
          <li>Informate</li>
          <li>Comunidad</li>
        </ul>
      </nav>
      <img src={menu} alt=""/>
    </section>
  )
}

export default Navbar