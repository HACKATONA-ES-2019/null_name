import React from 'react';
import './TelaInstrucao2.css'


export default function Menu({history}) {

    function pathYes(){
        history.push('/telaInstrucao3');
    }

    function pathNo(){
        history.push('/');
    }

    return(
        <div className="menu-container">
            <div className="bb">
                <h3>Instrução 2</h3>
                <p>Você está em uma sala fechada?</p>
                <div className="buttonController">
                    <button type="button" onClick={pathYes}>Sim</button>
                    <button type="button" onClick={pathNo}>Não</button>
                </div>
            </div>
        </div>
    );
}