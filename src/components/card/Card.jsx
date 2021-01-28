import React from 'react';
// import {Link} from 'react-router-dom';
import './card.scss';
import { db } from "../../controllers/firebase.js";

const Card = ({infoBanco, id, monto, ncuota}) => {
    //console.log('card',monto, ncuota, infoBanco.cuota, infoBanco.total );
    function handleSend(item){
        console.log('item', item);
        db.collection("loan").doc("unique").set({
            ...item,monto,ncuota
        })
        .then(function() {
            console.log("Document successfully written!");
            window.location.href = "/masinfo";
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      }
    
    if(id === 'bancopichincha'){
        return(
            <div className='card'>
                <div className='recomended'>
                    Recomendado
                </div>
                <img className='img-card' src={infoBanco.urlimagen} alt=""/>
                <div className="card-body d-column-flex">
                    <div className="info-tea padding-10 d-column-flex">
                        <p>Pago total:</p>
                        <p className='font-size-20'>S/.{infoBanco.total}</p>
                    </div> 
                    <div className='info'>
                        
                        <div className='padding-10'>
                            <label>Cuota:</label><span>S/.{infoBanco.cuota}</span>
                        </div>
                        <div className='padding-10'>
                            <label>TCEA(min):</label><span>{infoBanco.tceamin}</span>
                        </div>
                        <div className='padding-10'>
                            <label>Interés:</label><span>{infoBanco.interes}</span>
                        </div>
                    </div>
                   
                </div>
                <div className='d-row-flex'>
                    <div className= 'optionMore' onClick = {(e) => {e.preventDefault(); handleSend(infoBanco) }}>Más información </div>
                    <button name='solicitud' onClick={(e) => window.location.href = "/solicitud"} className='btn-simular'>Lo quiero</button> 
                </div>
            </div>
        )
    }else {
        return(
            <div className='card'>
                <img className='img-card' src={infoBanco.urlimagen} alt=""/>
                <div className="card-body d-column-flex">
                    <div className="info-tea padding-10 d-column-flex">
                        <p>Pago total:</p>
                        <p className='font-size-20'>S/.{infoBanco.total}</p>
                    </div> 
                    <div className='info'>
                        
                        <div className='padding-10'>
                            <label>Cuota:</label><span>S/.{infoBanco.cuota}</span>
                        </div>
                        <div className='padding-10'>
                            <label>TCEA(min):</label><span>{infoBanco.tceamin}</span>
                        </div>
                        <div className='padding-10'>
                            <label>Interés:</label><span>{infoBanco.interes}</span>
                        </div>
                    </div>
                   
                </div>
                <div className='d-row-flex'>
                    <div className= 'optionMore' onClick = {(e) => {e.preventDefault(); handleSend(infoBanco) }}>Más información </div>
                    <button name='solicitud' onClick={(e) => window.location.href = "/solicitud"} className='btn-simular'>Lo quiero</button> 
                </div>
            </div>
        )
    }
    
}

export default Card;