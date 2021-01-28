import React, {useState} from 'react';
import  './navbar.scss';
import menu from '../../images/menu_mobile.svg'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  let menuHamburguer
  let menuMask
  if (showMenu) {
   menuHamburguer = <div className = 'menuHamburguer'  >
     <nav>
        <ul>
          <li>
             <Link className='linkWithout' to='/'>Home</Link>
          </li>
          <hr className="menuHr"></hr>
          <li>
            <Link className='linkWithout' to='/simulator'>Prestamos</Link>
          </li>
          <hr className="menuHr"></hr>
          <li>
          <Link className='linkWithout' to = '/'>Ahorros</Link>
          </li>
          <hr className="menuHr"></hr>
          <li>
          <Link className='linkWithout' to = '/'>Infórmate</Link>
          </li>
          <hr className="menuHr"></hr>
          <li>
          <Link className='linkWithout' to = '/'>Comunidad</Link>
          </li>

          <button className='btn-rounded'>INGRESAR</button>
          
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