import React from 'react';
import './Contrato.css'


export default function Menu({history}) {

    function returnHome(){
        history.push('/');
    }

    function handleFunction(){
        history.push('/telaInstrucao1');
    }

    return(
        <div className="menu-container">
            <div className="bb">
                <h3>Termo de Confirmação</h3>
                <p>Este alerta de emergência será enviado diretamente as equipes responsáveis pela segurança do local.</p>
                <div className="buttonController">
                    <button type="button" onClick={handleFunction}>Aceito</button>
                    <button type="button" onClick={returnHome}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}