import NavBar from '../../components/navbar/Navbar';
import FormSimulator from '../../components/formSimulator/FormSimulator';
import Card from '../../components/card/Card';

import './simulator.scss';
import { useEffect, useState } from 'react';

import getBancos from '../../controllers/bancos.js'; 

const Simulator = () => {

    const [ inputMonto, setMonto ] = useState();
    const [ inputCuotas , setCuotas ] = useState();
    const [ arrayBancos, setArrayBancos] = useState([]);
    const [ arrayCalculos, setArrayCalculos ] = useState([]);

     useEffect(() => {
        getBancos(setArrayBancos) 
     }, [])

    console.log('array', arrayBancos);

    const handleInput = (name, value) => {
        if(name === 'monto'){
            setMonto(value);
        }else{
            setCuotas(value);
        }
        //console.log(inputMonto, inputCuotas);
    }

    // const sendForm = (e) => {
    //     e.preventDefault();
    //     //console.log('arrayBancos', arrayBancos);
    //     arrayBancos.map(el => {
    //         //console.log('el', el);
    //         const interes = el.tceamin * 12;
    //         const total = parseInt(inputMonto) + interes;
    //         return setArrayCalculos({
    //             interes: interes.toFixed(2),
    //             total: total.toFixed(2),
    //             cuota: (total/parseInt(inputCuotas)).toFixed(2),
                
    //         });  
    //     })
        
    // }


    const sendForm = (e) => {
        e.preventDefault();
        //console.log('arrayBancos', arrayBancos);
        arrayBancos.forEach(el => {
            //console.log('el', el);
            const interes = el.tceamin * 12;
            const totalnteres = parseInt(inputMonto) + (el.tceamin * 12);
            const calc = {
                ...el,
                interes: interes.toFixed(2),
                total: totalnteres.toFixed(2),
                cuota: (totalnteres/parseInt(inputCuotas)).toFixed(2),
            }
            console.log(inputMonto);
            // setArrayCalculos([
            //     ...arrayCalculos,
            //     calc
            // ]); 
            
            setArrayCalculos(arrayCalculos => [...arrayCalculos, calc]);
        })
        
    }
    console.log('prueba', arrayCalculos);

    return (
        <>
            <NavBar/>
            <section className="padding-section d-column-flex">
                <FormSimulator handleInput={handleInput} />
                <button className='btn-simular' onClick={sendForm}>Simular</button>
            </section>
            <hr className='width-100'/>
            <section className="container-cards padding-section">
                {
                    arrayBancos.map(banco => {
                        return <Card infoBanco={banco}/>
                    })
                }
                
            </section>
            
        </>
    )
}

export default Simulator;