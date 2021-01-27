import './solicitud.scss';

import Navbar from "../../components/navbar/Navbar";
import FormSolicitud from '../../components/formSolicitud/formSolicitud';

const Solicitud = () => {
    return(
        <>
            <Navbar/>
            <section className='d-column-flex'>
                <FormSolicitud/>
                <button className='btn-simular'>ENVIAR</button>
            </section>
           
        </>
    )
}

export default Solicitud;