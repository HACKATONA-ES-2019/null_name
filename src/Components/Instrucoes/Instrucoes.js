import React from "react";
import {Grid, Button} from "@material-ui/core";
import './Instrucoes.css';
function Instrucoes() {
    return(
    <div>
        <grid>
            <h5 className="Calma">SEMPRE MANTENHA A CALMA</h5>

            <h2>Localize a saída mais proxima que não esteja obstruida</h2>
            <Grid container direction="column">
                <Button onClick={() => {window.location.href='/Instrucoes1'}} variant="contained" size="large" >Alerta de Incidente</Button>
            </Grid>
        </grid>
    </div>
    );
}

export default Instrucoes;