import React from 'react';
import {Grid, Button, ButtonGroup} from "@material-ui/core";
import './Termos.css';
// import homeView from "./Home/homeView";

function Termos() {
    return(
        <div className="Confirmar">
            <div className="Confirmar1">
            <h1>VOCÊ CONFIRMA A SOLICITAÇÃO?</h1>
            <h3>Termos e Condições</h3>
            <p>Este alerta de emergência será enviado diretamente para equipe responsável pela segurança deste local.</p>
            <p>UTILIZE ESTA FUNCIONALIDADE COM RESPONSABILIDADE.</p>

                <ButtonGroup size="large" variant="contained">
                        <Button onClick={() => {window.location.href='/TipoIncidente'}}>Confirmar</Button>
                    <Button onClick={() => {window.location.href='/'}}>Rejeitar</Button>
                </ButtonGroup>
            </div>
        </div>
    );
}

export default Termos;
