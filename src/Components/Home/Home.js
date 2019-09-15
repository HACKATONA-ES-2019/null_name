import React from 'react';
import {Grid, Button} from "@material-ui/core";

function Home() {
    return(
        <Grid item xs={12}>
            <Grid container direction="column">
                <Button onClick={() => {window.location.href='/confirmar'}} variant="contained" size="large" >Alerta de Incidente</Button>
            </Grid>
        </Grid>
    );
}

export default Home;
