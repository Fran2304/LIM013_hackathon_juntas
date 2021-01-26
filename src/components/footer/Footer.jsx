import React from 'react';
import  './footer.scss';
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'
const Footer = () => {
  return (
    <section className='footer'>
      <img src="" alt="Logo"/>
      <section>
        <img src={twitter} alt="Twitter"/>
        <img src={facebook} alt="Facebook"/>
        <img src={linkedin} alt="Linkedin"/>
      </section>
    </section>
  )
}

export default Footer