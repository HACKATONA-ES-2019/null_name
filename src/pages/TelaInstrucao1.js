import React from 'react';
import './TelaInstrucao1.css'


export default function Menu({history}) {

    function pathYes(){
        history.push('/telaInstrucao2');
    }

    function pathNo(){
        history.push('/');
    }

    return(
        <div className="tela1-container">
            <div className="bb">
                <h3>Instrução 1</h3>
                <p>Qual o incidente está ocorrendo?</p>
                <div className="buttonController1">
                    <button type="button" onClick={pathYes}>Incêndio</button>
                    <button type="button" onClick={pathNo}>Desaba.</button>
                </div>
                <div className="buttonController2">
                    <button type="button" onClick={pathYes}>Gás</button>
                    <button type="button" onClick={pathNo}>Terremoto</button>
                </div>
            </div>
        </div>
    );
}