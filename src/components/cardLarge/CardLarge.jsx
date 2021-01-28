import "./cardlarge.scss";

const CardLarge = ({ moreInfo }) => {
  
  return (
    <>
      <div className="card-lg">
        <div className="card-lg-title">Descripción de la Empresa</div>
        <div className="card-lg-body">
          <li className='li-style'>Nombre de la empresa:</li>
          <label className="margin">{moreInfo.nombre}</label>
          <li className='li-style'>Número de contacto:</li>
          <label className="margin">{moreInfo.contacto}</label>
          <li className='li-style'>Producto:</li>
          <label className="margin">Préstamo Libre Disponibilidad</label>
          <li className='li-style'>Tipo de Préstamo</li>
          <label className="margin">Libre Disponibilidad</label>
          <li className='li-style'>Salario mínimo</li>
          <label className="margin">10000</label>
          <button className='btn-simular btn-float' onClick={() => window.location.href='/solicitud'}>SOLICITAR PRÉSTAMO</button>
        </div>
      </div>
      <div className="card-lg">
        <div className="card-lg-title">Información de préstamo</div>
        <div className="card-lg-body">
          <li className='li-style'>Cuota:</li>
          <label className="margin">{moreInfo.cuota}</label>
          {/* <li className='li-style'>TEA:</li><label className='margin'>9999 86349</label> */}
          <li className='li-style'>TCEA(Min):</li>
          <label className="margin">{moreInfo.tceamin}</label>
          <li className='li-style'>TCEA(Max):</li>
          <label className="margin">{moreInfo.tceamax}</label>
          <li className='li-style'>Pago total</li>
          <label className="margin">{moreInfo.total}</label>
        </div>
      </div>
      <div className="card-lg">
        <div className="card-lg-title">Requisitos</div>
        <div className="card-lg-body">
        
                {moreInfo.requisitosdocumentarios ? 
                moreInfo.requisitosdocumentarios.map((item) => {
                return <li className='li-style' id="list">{item}</li>
              }) : ''}
             
        </div>
      </div>
      <div className="card-lg">
        <div className="card-lg-title">Otros pagos</div>
        <div className="card-lg-body">
          <li className='li-style'>Mantenimiento:</li>
          <label className="margin">{moreInfo.mantenimiento}</label>
          <li className='li-style'>Penalidades:</li>
          <label className="margin">{moreInfo.penalidades}</label>
          <li className='li-style'>Membresía:</li>
          <label className="margin">{moreInfo.membresia}</label>
        </div>
      </div>
    </>
  );
};

export default CardLarge;
