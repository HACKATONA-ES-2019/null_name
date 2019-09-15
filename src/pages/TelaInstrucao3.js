import React from 'react';
import './TelaInstrucao3.css'


export default function Menu({history}) {

    function pathYes(){
        history.push('/telaInstrucao4');
    }

    function pathNo(){
        history.push('/');
    }

    return(
        <div className="menu-container">
            <div className="bb">
                <h3>Instrução 3</h3>
                <p>Você está em uma sala fechada?</p>
                <div className="buttonController">
                    <button type="button" onClick={pathYes}>Sim</button>
                    <button type="button" onClick={pathNo}>Não</button>
                </div>
            </div>
        </div>
    );
}