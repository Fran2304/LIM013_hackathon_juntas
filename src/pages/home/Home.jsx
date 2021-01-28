import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import ProductHome from "../../components/productsHome/ProductHome";
import Footer from "../../components/footer/Footer";
// import banner from "../../images/banner_mobile.png";
import car from "../../images/car.svg";
import cash from "../../images/cash.svg";
import pigbank from "../../images/pig_bank.svg";
import safe from "../../images/safe.png";
import house from "../../images/house_line.png";
import heart from "../../images/heart_24px.png";
import points from "../../images/more_vert_24px.png";
import invertir from "../../images/invertir.png";
import finanzas from "../../images/finanzas.png";
import emprender from "../../images/emprender.png";
import comunidad from "../../images/comunidad.png";
import iconSend from '../../images/iconAnchor.svg'
import iconAnchor from '../../images/send.svg'
const Home = () => {
  return (
    <section>
      <Navbar></Navbar>
      <section className="banner-home">
        {/* <img src={banner} alt="" /> */}
        <h2>Busca tu mejor opción bancaria</h2>
        <h3>Simulador de préstamos</h3>
        <button onClick={() => window.location.href='/simulator'}>Comparar</button>
      </section>
      <section className="products-body">
        <h4>Comparaciones finacieras</h4>
        <hr />
        <section>
          <ProductHome image={car} text={"Vehicular"}></ProductHome>
          <ProductHome image={cash} text={"Préstamo"}></ProductHome>
          <ProductHome image={pigbank} text={"Ahorro"}></ProductHome>
          <ProductHome image={house} text={"Hipoteca"}></ProductHome>
          <ProductHome image={safe} text={"Seguro"}></ProductHome>
        </section>
      </section>
      <div className='information-growth-title'>
          <h4>Infórmate y crece</h4>
          <hr />
      </div>
      <section className="information-growth">
        
        <section className="allBlog">
          <section className="blog">
            <img className="imgBlog" src={emprender} alt="oso" />
            <section className="contentBlog">
              <p className="titleBlog">Cómo aprender</p>
              <p className="subtitleBlog">Video tutoriales</p>
              <p className="extractBlog">
                Todo lo que debes saber sobe como constituir una empresa.
              </p>
              <div>
                <p className="viewMore">VER MÁS</p>
                <div className="icons">
                  <img className="heart" src={heart} alt="heart" />
                  <img className="points" src={points} alt="" />
                </div>
              </div>
            </section>
          </section>
        </section>
        <section className="allBlog">
          <section className="blog">
            <img className="imgBlog" src={finanzas} alt="oso" />
            <section className="contentBlog">
              <p className="titleBlog">Cómo aprender</p>
              <p className="subtitleBlog">Video tutoriales</p>
              <p className="extractBlog">
                Todo lo que debes saber sobe como constituir una empresa.
              </p>
              <div>
                <p className="viewMore">VER MÁS</p>
                <div className="icons">
                  <img className="heart" src={heart} alt="heart" />
                  <img className="points" src={points} alt="" />
                </div>
              </div>
            </section>
          </section>
        </section>
        <section className="allBlog">
          <section className="blog">
            <img className="imgBlog" src={invertir} alt="oso" />
            <section className="contentBlog">
              <p className="titleBlog">Cómo aprender</p>
              <p className="subtitleBlog">Video tutoriales</p>
              <p className="extractBlog">
                Todo lo que debes saber sobe como constituir una empresa.
              </p>
              <div>
                <p className="viewMore">VER MÁS</p>
                <div className="icons">
                  <img className="heart" src={heart} alt="heart" />
                  <img className="points" src={points} alt="" />
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
      <div className='information-growth-title'>
        <button className='btn-simular'>Ver todo</button>
      </div>
      <section className="comunity">
        <h4>Únete a nuestra comunidad</h4>
        <hr />
        <section className="allComunity">
          <img className="imgComunity" src={comunidad} alt="oso" />
          <p className='teAcompañamos'>Te acompañamos a crecer</p>
          <p className='miles'>Miles de mujeres ya forman parte de nuestra comunidad</p>
          <p className= 'todo'>
            Todo lo que necesitas saber de cómo comenzar y mejorara tu
            emprendimiento,{" "}
          </p>
          <section className ='benefits'>
            <img src={iconAnchor} alt=""/>
            <section>
              <p className='sub'>Podrás realizar consultas</p>
              <p>Si tienes dudas nuestro foro te permitirá realizar consultas que nuestras comunidad responderá</p>
            </section>
          </section>
          <section className ='benefits'>
            <img src={iconSend}alt=""/>
            <section>
              <p className='sub'>Miles de experiencias</p>
              <p>Podrás compartir tus experiencas ,así como acceder a las hitorias de otra mujeres como tú</p>
            </section>
          </section>
          <button className='button-home'>Foro</button>
        </section>
       
      </section>
      <Footer></Footer>
    </section>
  );
};
export default Home;
