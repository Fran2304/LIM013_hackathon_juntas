import React, {useState} from 'react';
import  './navbar.scss';
import menu from '../../images/menu_mobile.svg'
import logo from '../../images/logo-prueba.png'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  let menuHamburguer
  let menuMask
  if (showMenu) {
   menuHamburguer = <div className = 'menuHamburguer'  >
     <nav>
        <ul>
          <li>Home</li>
          <hr className="menuHr"></hr>
          <li>Préstamos</li>
          <hr></hr>
          <li>Ahorros</li>
          <hr></hr>
          <li>Infórmate</li>
          <hr></hr>
          <li>Comunidad</li>
        </ul>
      </nav>
   </div>
   menuMask = <div className='menuMask' onClick={() => setShowMenu(false)}>
   </div>
  }


  return (
    <section className='navbar'>
      <img className='logo'src={logo} alt="Logo"/>
      {/* <nav>
        <ul>
          <li>Home</li>
          <li>Préstamos</li>
          <li>Ahorros</li>
          <li>Informate</li>
          <li>Comunidad</li>
        </ul>
      </nav> */}
      <img className='hamburguer'src={menu} alt="hamburguer menu"
      onClick = {() => setShowMenu(!showMenu)}/>
      {menuMask}
      {menuHamburguer}
    </section>
  )
}

export default Navbar