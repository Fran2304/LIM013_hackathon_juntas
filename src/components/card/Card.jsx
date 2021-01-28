import './card.scss';

import { Link } from 'react-router-dom';

const Card = ({infoBanco}) => {
    return(
        <div className='card'>
            <img className='img-card' src={infoBanco.urlimagen} alt=""/>
            <div className="card-body d-row-flex">
                <div className='info'>
                    <div className='padding-10'>
                        <label>Cuota:</label><span>S/.{infoBanco.cuota}</span>
                    </div>
                    <div className='padding-10'>
                        <label>TCEA(min):</label><span>{infoBanco.tceamin}</span>
                    </div>
                    <div className='padding-10'>
                        <label>TCEA(máx):</label><span>{infoBanco.tceamax}</span>
                    </div>
                    <div className='padding-10'>
                        <label>Interés:</label><span>{infoBanco.interes}</span>
                    </div>
                </div>
                <div className="info-tea padding-10 d-column-flex">
                    <p>Pago total:</p>
                    <p className='font-size-20'>S/.{infoBanco.total}</p>
                </div> 
            </div>
            <div>
                <Link to='masinfo'>Más información</Link>
                <Link to='loquiero' className='btn-simular'>Lo quiero</Link>
              
            </div>
        </div>
    )
}

export default Card;