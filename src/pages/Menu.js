import React from 'react';
import './Menu.css'


export default function Menu({history}) {

    function handleFunction(){
        history.push('/contrato');

    }

    return(
        <div className="menu-container">
           
            <div className="bb">
                <button type="button" onClick={handleFunction}>Alerta de Incidente</button>
                <button type="button" onClick={handleFunction}>Sou Staff</button>
            </div>
        </div>
        
    );
}