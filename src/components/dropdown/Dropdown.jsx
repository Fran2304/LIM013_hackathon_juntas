import { useState } from 'react';
import './dropdown.scss';

const Dropdown = ({objectInfo}) => {
    const [ click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);

    return(
        <div  onClick={handleClick} className='d-column-flex dropdown-menu'>
            <span>Ver Resumen del Préstamo <i className= { click ? "fas fa-sort-up" : "fas fa-sort-down"}></i></span>

            <ul className={ click ? 'options block' : 'options none'}>
                <li className='li-style'><b>Entidad</b> {objectInfo.nombre}</li>
                <li className='li-style'><b>Producto:</b>Préstamo Libre</li>
                <li className='li-style'><b>Tipo de Préstamo:</b>Libre Disponibilidad</li>
                <li className='li-style'><b>Monto de Préstamo:</b>{objectInfo.monto}</li>
                <li className='li-style'><b>N° de cuotas:</b>{objectInfo.ncuota}</li>
                <li className='li-style'><b>Cuota:</b> {objectInfo.cuota}</li>
                <li className='li-style'><b>TCEA(Min):</b> {objectInfo.tceamin}</li>
                <li className='li-style'><b>TCEA(Max):</b> {objectInfo.tceamax}</li>
                <li className='li-style'><b>Pago Total:</b> {objectInfo.total}</li>
            </ul>
        </div>
    )
}

export default Dropdown;