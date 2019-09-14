import React from 'react';
import {Grid, Button} from "@material-ui/core";
import './App.css';

function App() {
  return(
      <div style={{backgroundColor: "blueviolet"}}>
      <Grid container justify="center">
          <Grid item xs={12}>
              <Grid container direction="column">
                  <Grid item xs={12}>
                      <div style={{backgroundColor:'black'}}>A</div>
                  </Grid>
                  <Grid item xs={12}>
                      <div style={{backgroundColor:'yellow'}}>B</div>
                  </Grid>
              </Grid>
          </Grid>
      </Grid>
      </div>
  );
}

export default App;
