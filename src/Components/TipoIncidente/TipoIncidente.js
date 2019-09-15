import React from 'react';
import {Grid, Button} from "@material-ui/core";

function TipoIncidente() {
    return(
       <div className="TipoIncidente">
        <Grid>
        <h1>INFORME O TIPO DO INCIDENTE: </h1>
            <Grid container direction="column">
            <Button size="large" variant="contained">DESABAMENTO</Button>
            </Grid>
            <Grid container direction="column">
                <Button onClick={() => {window.location.href='/Instrucoes'}} variant="contained" size="large" >INCÊNDIO</Button>
            </Grid>
        </Grid>
       </div>
    );
}
export default TipoIncidente;
