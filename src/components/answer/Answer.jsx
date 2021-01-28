import "./answer.scss";
import bar3 from "../../images/barra3mobile.svg";
import sendVector from "../../images/sendVector.svg";
const Answer = () => {
  return (
    <section className="answer">
      <img src={bar3} alt="paso 3" />
      <img src={sendVector} alt="" />
      <p className='yourRequest'>Tu solicitud fue enviada al banco Pichincha</p>
      <p className='thanks'>Gracias por confiar en nosotras</p>
      <p className='mensajeMail'>
        Te hemos enviado una copia a tu correo en la bandeja de principal, por
        favor revisa en correos no deseados o spam. Un asesor del banco
        Pichincha analizarán tu caso y te contactará en un plazo máximo de 72
        horas.
      </p>
      <button onClick={() => window.location.href='/'}>IR AL HOME</button>
    </section>
  );
};

export default Answer;
