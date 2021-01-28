import React from 'react';
// import {Link} from 'react-router-dom';
import './card.scss';
import { db } from "../../controllers/firebase.js";

const Card = ({infoBanco}) => {
    function handleSend(item){
        console.log('item', item);
        db.collection("loan").doc("unique").set({
            ...item,
        })
        .then(function() {
            console.log("Document successfully written!");
            window.location.href = "/masinfo";
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
      }
    return(
        <div className='card'>
            <div className='recomended'>
                Recomendado
            </div>
            <div className='card-body'>
                
            
            <img className='img-card' src={infoBanco.urlimagen} alt=""/>
            <div className="card-body d-row-flex">
                <div className='info'>
                <div className="info-tea padding-10 d-column-flex">
                    <p>Pago total:</p>
                    <p className='font-size-20'>S/.{infoBanco.total}</p>
                </div> 
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
            <div>
                {/* <a name='masinfo' onClick={(e) => redirectionPage(e.target.name)}>Más información</a> */}
                {/* <button name='loquiero' onClick={(e) => redirectionPage(e.target.name)} className='btn-simular'>Lo quiero</button> */}
                <div className= 'optionMore' onClick = {(e) => {e.preventDefault(); handleSend(infoBanco) }}>Más información </div>
            </div>
            </div>
        </div>
    )
}

export default Card;