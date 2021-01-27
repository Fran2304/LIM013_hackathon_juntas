import './formsolicitud.scss';

const FormSolicitud = () => {
    return (
        <form action="" className='form-solicitud d-column-flex font-color'>
            <p className='title-form'>Simulador de Préstamos</p>
            <div className='label-input bold'>
                <label>Nombres</label>
                <input type="text" placeholder='Ingresar nombres'/>
            </div>
            <div className='label-input bold'>
                <label>Apellidos</label>
                <input type="text" placeholder='Ingresar apellidos'/>
            </div>
            <div className='label-input bold'>
                <label>DNI</label>
                <input type="text" placeholder='Número de DNI'/>
            </div>
            <div className='label-input bold'>
                <label>RUC</label>
                <input type="text" placeholder='Ingresar número de RUC'/>
            </div>
            <div className='label-input bold'>
                <label>Rubro del negocio</label>
                <input type="text" placeholder='Ingresar rubro del negocio'/>
            </div>

            <div className='label-input  margin-top-30'>
                <label htmlFor='banco'>Datos del banco para realizar el depósito</label>
                <select name="banco" id="banco">
                    <option value="bcp">Banco de Crédito</option>
                    <option value="interbank">Interbank</option>
                    <option value="banconacion">Banco de la Nación</option>
                    <option value="bbva">BBVA</option>
                    <option value="bancopichincha">Banco Pichincha</option>
                    <option value="mibanco">Mi banco</option>
                    <option value="scotiabank">Scotiabank</option>
                </select>
            </div>
            <div className='label-input bold'>
                <label>Cuenta bancaria</label>
                <input type="text" placeholder='Ingresar número de cuenta bancaria'/>
            </div>
            <div>
                <input type="checkbox" name="terminos" id="terminos"/> Acepto los términos y condiciones
            </div>
        </form>

    )
}

export default FormSolicitud;