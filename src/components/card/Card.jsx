import './card.scss';

const Card = ({infoBanco}) => {
    console.log('infoBanco', infoBanco);
    return(
        <div className='card'>
            <img className='img-card' src={infoBanco.urlimagen} alt=""/>
            <div className="card-body d-row-flex">
                <div className='info'>
                    <div className='padding-10'>
                        <label>Cuota:</label><span>S/.10.00</span>
                    </div>
                    <div className='padding-10'>
                        <label>TCEA(min):</label><span>{infoBanco.tceamin}</span>
                    </div>
                    <div className='padding-10'>
                        <label>TCEA(máx):</label><span>{infoBanco.tceamax}</span>
                    </div>
                    <div className='padding-10'>
                        <label>Pago total:</label><span>S/.10.00</span>
                    </div>
                </div>
                <div className="info-tea padding-10">
                    Explicación
                </div>
            </div>
            <div>
                <a href="#">Más información</a>
                <button className='btn-simular'>Lo quiero</button>
            </div>
        </div>
    )
}

export default Card;