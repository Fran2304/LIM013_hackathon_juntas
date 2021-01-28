import { useState } from 'react';
import './dropdown.scss';

const Dropdown = ({objectInfo}) => {
    const [ click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <div  onClick={handleClick} className='d-column-flex dropdown-menu'>
            <span>Ver Resumen del Préstamo <i className= { click ? "fas fa-sort-up" : "fas fa-sort-down"}></i></span>

            <ul className={ click ? 'options block' : 'options none'}>
                <li><b>Entidad</b> Banco Pichincha</li>
                <li><b>Producto:</b> Banco Pichincha</li>
                <li><b>Tipo de Préstamo:</b> Banco Pichincha</li>
                <li><b>Monto de Préstamo:</b> Banco Pichincha</li>
                <li><b>N° de cuotas:</b> Banco Pichincha</li>
                <li><b>Cuota:</b> Banco Pichincha</li>
                <li><b>TEA:</b> Banco Pichincha</li>
                <li><b>TCEA: </b>Banco Pichincha</li>
                <li><b>TCEA(Min):</b> Banco Pichincha</li>
                <li><b>TCEA(Max):</b> Banco Pichincha</li>
                <li><b>Pago Total:</b> Banco Pichincha</li>
            </ul>
        </div>
    )
}

export default Dropdown;