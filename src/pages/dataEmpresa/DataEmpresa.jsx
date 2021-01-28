import './dataempresa.scss';

import NavBar from '../../components/navbar/Navbar';
import CardLarge from '../../components/cardLarge/CardLarge';
import PreFooter from '../../components/prefooter/Prefooter';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

import {useEffect,useState} from 'react';
import getMoreInfo from "../../controllers/moreInfo.js";  

const DataEmpresa = () => {
    const [objectInfo, setObjectInfo] = useState({});
    useEffect(() => {
        getMoreInfo(setObjectInfo)
    }, []);

    console.log('object info', objectInfo);
    return (
        <>
            <NavBar/>
            <Breadcrumb page={'masinfo'}/>
            <div className="container d-column-flex">
                <CardLarge moreInfo={objectInfo}/>
            </div>
            <PreFooter/>

        </>
        
    )
}

export default DataEmpresa;