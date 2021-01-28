import './breadcrumb.scss';
import { Link } from 'react-router-dom';

const Breadcrumb = ({page}) => {

    if(page === 'simulador'){
        return (
            <div className = 'breadcrumb'>
                <Link to="/">Home ></Link>
                <Link to="/simulator" className='selected'>Simulador </Link>
            </div>
        )
    }else if( page === 'masinfo') {
        return (
            <div className = 'breadcrumb'>
                <Link to="/">Home ></Link>
                <Link to="/simulator">Simulador ></Link>
                <Link to="/" className='selected'>Banco Pichincha</Link>
            </div>
        )
    }else if( page === 'solicitud') {
        return (
            <div className = 'breadcrumb'>
                <Link to="/">Home ></Link>
                <Link to="/simulator">Préstamo ></Link>
                <Link to="/" className='selected'>Solicitud del Préstamo</Link>
            </div>
        )
    }    
}

export default Breadcrumb;