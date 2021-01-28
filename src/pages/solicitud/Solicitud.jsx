import './solicitud.scss';

import Navbar from "../../components/navbar/Navbar";
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Dropdown from '../../components/dropdown/Dropdown';

import { getClient, postSolicitud } from '../../controllers/cliente.js';
import getMoreInfo from "../../controllers/moreInfo.js";  
import { useState, useEffect } from 'react';

const Solicitud = () => {

    const [inputDni, setDni] = useState();
    const [inputRuc, setRuc] = useState();
    const [inputRubro, setRubro] = useState();
    const [inputBanco, setBanco] = useState();
    const [inputCuenta, setCuenta] = useState();
    const [dataClient, setDataClient] = useState({});

    const [objectInfo, setObjectInfo] = useState({});

    useEffect(() => {
        getMoreInfo(setObjectInfo)
    }, []);

    const handleInput = (name,value) => {
        console.log('value', value);
        switch(name) {
            case 'dni': setDni(value);
            break;
            case 'ruc': setRuc(value);
            break;
            case 'rubro': setRubro(value);
            break;
            case 'banco': setBanco(value);
            break;
            case 'cuenta': setCuenta(value);
            break;
            default: console.log('Error option!');
        }
    }

    const requestDni = (e) => {
        if(e.keyCode === 13){
            if(inputDni){
                getClient(inputDni, setDataClient);
            }else{
                console.log('Ingresar DNI');
            }
        }
    }
   
    const sendForm = () => {
        if(inputDni){
            postSolicitud(inputDni, inputRuc, inputRubro, inputBanco, inputCuenta  )
        }else{
            console.log('Just moment!');
        }
    }

    return(
        <>
            <Navbar/>
            <Breadcrumb />
            
            <section className='d-column-flex'>
                <form action="" className='form-solicitud d-column-flex font-color'>
                    <p className='title-form'>Solicitud de Préstamos</p>
                    <hr/>
                    <Dropdown objectInfo={objectInfo}/>
                    <div className='label-input bold'>
                        <label>DNI</label>
                        <input type="text" name='dni' placeholder='Número de DNI' onKeyDown={requestDni} onChange={(e) => handleInput(e.target.name, e.target.value)}/>
                    </div>
                    <div className='label-input bold'>
                        <label>Nombres</label>
                        <input type="text" placeholder='Ingresar nombres' value={dataClient.nombres} />
                    </div>
                    <div className='label-input bold'>
                        <label>Apellidos</label>
                        <input type="text" placeholder='Ingresar apellidos' value={dataClient.apellidos} />
                    </div>
                    <div className='label-input bold'>
                        <label>RUC</label>
                        <input type="text" name='ruc' placeholder='Ingresar número de RUC' onChange={(e) => handleInput(e.target.name, e.target.value)}/>
                    </div>
                    <div className='label-input bold'>
                        <label>Rubro del negocio</label>
                        <input type="text" name='rubro' placeholder='Ingresar rubro del negocio' onChange={(e) => handleInput(e.target.name, e.target.value)}/>
                    </div>

                    <div className='label-input  margin-top-30'>
                        <label htmlFor='banco'>Datos del banco para realizar el depósito</label>
                        <select name="banco" id="banco" onChange={(e) => handleInput(e.target.name, e.target.value)}>
                            <option value="bcp">Banco de Crédito</option>
                            <option value="interbank">Interbank</option>
                            <option value="banco-nacion">Banco de la Nación</option>
                            <option value="bbva">BBVA</option>
                            <option value="banco-pichincha">Banco Pichincha</option>
                            <option value="mi-banco">Mi banco</option>
                            <option value="scotiabank">Scotiabank</option>
                        </select>
                    </div>
                    <div className='label-input bold'>
                        <label>Cuenta bancaria</label>
                        <input type="text" name='cuenta' onChange={(e) => handleInput(e.target.name, e.target.value)} placeholder='Ingresar número de cuenta bancaria'/>
                    </div>
                    <div>
                        <input type="checkbox" name="terminos" id="terminos"/> Acepto los términos y condiciones
                    </div>
                </form>
                <button className='btn-simular' onClick={sendForm}>ENVIAR</button>
            </section>
           
        </>
    )
}

export default Solicitud;