import './dataempresa.scss';

import NavBar from '../../components/navbar/Navbar';
import CardLarge from '../../components/cardLarge/CardLarge';
import PreFooter from '../../components/prefooter/Prefooter';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

const DataEmpresa = () => {
    return (
        <>
            <NavBar/>
            <Breadcrumb />
            <div className="container d-column-flex">
                <CardLarge/>
            </div>
            <PreFooter/>

        </>
        
    )
}

export default DataEmpresa;