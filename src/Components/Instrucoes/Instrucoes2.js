import React from "react";
import {Grid, Button} from "@material-ui/core";

function Instrucoes2() {
    return(
        <div>
            <grid>
                <h1></h1>
                <Grid container direction="column">
                    <Button onClick={() => {window.location.href='/Instrucoes3'}} variant="contained" size="large" >Alerta de Incidente</Button>
                </Grid>
            </grid>
        </div>
    );
}
export default Instrucoes2;