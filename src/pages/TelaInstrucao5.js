import React from 'react';
import './TelaInstrucao5.css'


export default function Menu({history}) {

    function pathYes(){
        history.push('/telaInstrucao5');
    }

    function pathNo(){
        history.push('/');
    }

    return(
        <div className="menu-container">
            <div className="bb">
                <h3>Instrução 5</h3>
                <p>Você está em uma sala fechada?</p>
                <div className="buttonController">
                    <button type="button" onClick={pathYes}>Sim</button>
                    <button type="button" onClick={pathNo}>Não</button>
                </div>
            </div>
        </div>
    );
}