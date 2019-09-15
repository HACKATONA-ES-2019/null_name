import React from "react";
import {Grid, Button} from "@material-ui/core";

function Instrucoes1() {
    return(
        <div>
            <grid>
                <h1></h1>
                <Grid container direction="column">
                    <Button onClick={() => {window.location.href='/Instrucoes2'}} variant="contained" size="large" >Alerta de Incidente</Button>
                </Grid>
            </grid>
        </div>
    );
}
export default Instrucoes1;