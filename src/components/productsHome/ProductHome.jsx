import React from 'react';
import './productHome.scss'
const ProductHome = (props) => {
  const {image, text} = props
  return(
  <section className='productHome'>
    <img src={image} alt=""/>
    <p>{text}</p>
  </section>
)}

export default ProductHome;