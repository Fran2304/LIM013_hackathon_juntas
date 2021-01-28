  
import React from 'react';

import NavBar from '../../components/navbar/Navbar';
import FormSimulator from '../../components/formSimulator/FormSimulator';
import Card from '../../components/card/Card';
import Prefooter from '../../components/prefooter/Prefooter';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';

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

    //console.log('array', arrayBancos);

    const handleInput = (name, value) => {
        if(name === 'monto'){
            setMonto(value);
        }else{
            setCuotas(value);
        }
        //console.log(inputMonto, inputCuotas);
    }

    const sendForm = (e) => {
        e.preventDefault();
        //console.log('arrayBancos', arrayBancos);
        setArrayCalculos([]);
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

            setArrayCalculos(arrayCalculos => [...arrayCalculos, calc]);
        })
        
    }
    //console.log('prueba', arrayCalculos);

    const sortArray = (value) => {
        console.log('value', value);
        if( value === 'menor'){
            arrayCalculos.sort((a,b) => {
                return a.total - b.total
            })
            
        }else{
            arrayCalculos.sort((a,b) => {
                return b.total - a.total
            })
        }  
        setArrayCalculos([...arrayCalculos])
    }
    
    return (
        <>
            <NavBar/>
            
            <Breadcrumb page={'simulador'}/>

            <section className="padding-section d-column-flex">
                <FormSimulator handleInput={handleInput} />
                <button className='btn-simular' onClick={sendForm}>Simular</button>
            </section>
            {/*  <p>7 Resultados</p> */}
            <hr className='width-100'/>
            <section className="container-cards padding-section d-column-flex">
                <select className='select-order' name="sort" id="sort" onChange={(e) => sortArray(e.target.value)}>
                    <option >Ordenar por</option>
                    <option value="menor">Menor pago</option>
                    <option value="mayor">Mayor pago</option>
                </select>
                {
                    /* arrayCalculos.sort((a,b) => {
                        a.total < b.total
                    }) */
                    
                    arrayCalculos.map(banco => {
                        return <Card key={banco.id} infoBanco={banco} monto={inputMonto} ncuota={inputCuotas}/>
                    })
                }
            </section>
            <Prefooter/>
            
        </>
    )
}
export default Simulator;