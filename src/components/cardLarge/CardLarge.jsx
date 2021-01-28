import "./cardlarge.scss";

const CardLarge = ({ moreInfo }) => {
  console.log(moreInfo.requisitosdocumentarios);
  console.log(moreInfo.nombre)
  
  return (
    <>
      <div className="card-lg">
        <div className="card-lg-title">Descripción de la Empresa</div>
        <div className="card-lg-body">
          <li>Nombre de la empresa:</li>
          <label className="margin">{moreInfo.nombre}</label>
          <li>Número de contacto:</li>
          <label className="margin">{moreInfo.contact}</label>
          <li>Producto:</li>
          <label className="margin">Préstamo Libre Disponibilidad</label>
          <li>Tipo de Préstamo</li>
          <label className="margin">Libre Disponibilidad</label>
          <li>Salario mínimo</li>
          <label className="margin">10000</label>
        </div>
      </div>
      <div className="card-lg">
        <div className="card-lg-title">Información de préstamo</div>
        <div className="card-lg-body">
          <li>Cuota:</li>
          <label className="margin">{moreInfo.cuota}</label>
          {/* <li>TEA:</li><label className='margin'>9999 86349</label> */}
          <li>TCEA(Min):</li>
          <label className="margin">{moreInfo.teamin}</label>
          <li>TCEA(Max):</li>
          <label className="margin">Libre Disponibilidad</label>
          <li>Pago total</li>
          <label className="margin">{moreInfo.total}</label>
        </div>
      </div>
      <div className="card-lg">
        <div className="card-lg-title">Requisitos</div>
        <div className="card-lg-body">
        
                {moreInfo.requisitosdocumentarios ? 
                moreInfo.requisitosdocumentarios.map((item) => {
                return <li id="list">{item}</li>
              }) : ''}
             
        </div>
      </div>
      <div className="card-lg">
        <div className="card-lg-title">Otros pagos</div>
        <div className="card-lg-body">
          <li>Mantenimiento:</li>
          <label className="margin">{moreInfo.mantenimiento}</label>
          <li>Penalidades:</li>
          <label className="margin">{moreInfo.penalidades}</label>
          <li>Membresía:</li>
          <label className="margin">{moreInfo.membresia}</label>
        </div>
      </div>
    </>
  );
};

export default CardLarge;
