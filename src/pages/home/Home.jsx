import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import ProductHome from "../../components/productsHome/ProductHome";
// import banner from "../../images/banner_mobile.png";
import car from "../../images/car.svg";
import cash from "../../images/cash.svg";
import pigbank from "../../images/pig_bank.svg";
import safe from "../../images/safe.png";
import house from "../../images/house_line.png";
import heart from "../../images/heart_24px.png";
import points from "../../images/more_vert_24px.png";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <section>
      <Navbar></Navbar>
      <section className="banner-home">
        {/* <img src={banner} alt="" /> */}
        <h2>Busca tu mejor opción bancaria</h2>
        <h3>Simulador de préstamos</h3>
        <button>Comparar</button>
      </section>
      <section className="products-body">
        <p>Comparaciones finacieras</p>
        <div></div>
        <ProductHome image={car} text={"Vehicular"}></ProductHome>
        <ProductHome image={cash} text={"Prestamo"}></ProductHome>
        <ProductHome image={pigbank} text={"Ahorro"}></ProductHome>
        <ProductHome image={house} text={"Hipoteca"}></ProductHome>
        <ProductHome image={safe} text={"Seguro"}></ProductHome>
      </section>
      <section className="">
        <p>Informate y crece</p>
        <div></div>
        <section>
          <section></section>
          <section>
            <p>Cómo aprender</p>
            <p>Video tutoriales</p>
            <p>Todo lo que debes saber sobe como constituir una empresa.</p>
            <p>Ver más</p>
            <img src={heart} alt="heart" />
            <img src={points} alt="" />
          </section>
        </section>
      </section>
      <Footer></Footer>
    </section>
  );
};
export default Home;
