import React, {useState} from 'react';
import  './navbar.scss';
import menu from '../../images/menu_mobile.svg'
import logo from '../../images/logo.png'
import googleLogin from '../../controllers/auth.js'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  let menuHamburguer
  let menuMask
  function login(e) {
    e.preventDefault();
    googleLogin().then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
  
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  }
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

          <button className='btn-rounded' onClick={login}>INGRESAR</button>
          
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