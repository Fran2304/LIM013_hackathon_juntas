import './cardlarge.scss';

const CardLarge = () => {
    return (
        <>
            <div className='card-lg'>
                <div className='card-lg-title'>
                    Descripción de la Empresa
                </div>
                <div className='card-lg-body'>
                    <li>Nombre de la empresa:</li><label className='margin'>Banco Pichincha</label>
                    <li>Número de contacto:</li><label className='margin'>9999 86349</label>
                    <li>Producto:</li><label className='margin'>Préstamo Libre Disponibilidad</label>
                    <li>Tipo de Préstamo</li><label className='margin'>Libre Disponibilidad</label>
                    <li>Salario mínimo</li><label className='margin'>10000</label>
                </div>
            </div>
            <div className='card-lg'>
                <div className='card-lg-title'>
                    Información de préstamo
                </div>
                <div className='card-lg-body'>
                    <li>Cuota:</li><label className='margin'>Banco Pichincha</label>
                    <li>TEA:</li><label className='margin'>9999 86349</label>
                    <li>TCEA(Min):</li><label className='margin'>Préstamo Libre Disponibilidad</label>
                    <li>TCEA(Max):</li><label className='margin'>Libre Disponibilidad</label>
                    <li>Pago total</li><label className='margin'>10000</label>
                </div>
            </div>
            <div className='card-lg'>
                <div className='card-lg-title'>
                    Requisitos
                </div>
                <div className='card-lg-body'>
                    <label className='margin'>Banco Pichincha</label>
                </div>
            </div>
            <div className='card-lg'>
                <div className='card-lg-title'>
                    Otros pagos
                </div>
                <div className='card-lg-body'>
                    <li>Mantenimiento:</li><label className='margin'>S/10.00</label>
                    <li>Penalidades:</li><label className='margin'>S/80.00</label>
                    <li>Membresía:</li><label className='margin'>S/40.00</label>
                </div>
            </div>
        </>
        
    )
}

export default CardLarge;