import { Link } from 'react-router-dom';

import './breadcrumb.scss';

const Breadcrumb = () => {
    return (
        <div className = 'breadcrumb'>
            <Link to="/">Home ></Link>
            <Link to="/simulator">Simulador ></Link>
            <Link to="/" className='selected'>Préstamo</Link>
        </div>
    )
}

export default Breadcrumb;