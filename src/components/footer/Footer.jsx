import React from 'react';
import  './footer.scss';
import twitter from '../../images/twitter.svg'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import linkedin from '../../images/linkedin.svg'
import logo from '../../images/logo.png'
import flecha from '../../images/flecha.svg'
const Footer = () => {
  return (
    <section className='footer'>
      <section className='grupoOne'>
      <section className='titleFooter'>
      <h1>Busca la ayuda que</h1>
      <h2>necesitas</h2>
      </section>

      <div className='buttonContactar'>
      <p>CONTACTAR</p>
      <img className='flecha' src={flecha} alt="Logo"/>
      </div>
      </section>
      
      <section className='marco'>
        <section className='iconos' >
        <img className='logo' src={logo} alt="Logo"/>
        <section className='iconRedesSociales'>
          <img src={twitter} alt="Twitter"/>
          <img src={facebook} alt="Facebook"/>
          <img src={instagram} alt="instagram"/>
          <img src={linkedin} alt="Linkedin"/>
          </section>
        </section>
        <section className="infoPlus">
          <h3>Nosotros</h3>
          <ul>
            <li>Quiénes somos</li>
            <li>Preguntas frecuentes</li>
            <li>Términos y condiciones</li>
          </ul>
        </section>

        <section className="infoPlus">
          <h3>Te ayudamos</h3>
          <ul>
            <li>Compara</li>
            <li>Infórmate</li>
            <li>Asesoría</li>
          </ul>
        </section>

        <section className="infoPlus">
          <h3>Infórmate</h3>
          <ul>
            <li>Blog</li>
            <li>Podcast</li>
            <li>Foro</li>
          </ul>
        </section>

      </section>
      
      <h4>@2021 todos los derechos reservados</h4>
    </section>
  )
}

export default Footer