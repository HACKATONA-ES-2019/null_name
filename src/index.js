import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Termos from "./Components/Termos/Termos";
import TipoIncidente from "./Components/TipoIncidente/TipoIncidente";
import Instrucoes from "./Components/Instrucoes/Instrucoes";
import Instrucoes1 from "./Components/Instrucoes/Instrucoes1";
import Instrucoes2 from "./Components/Instrucoes/Instrucoes2";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App}/>
            <Route path="/confirmar" component={Termos}/>
            <Route path="/TipoIncidente" component={TipoIncidente}/>
            <Route path="/Instrucoes" component={Instrucoes}/>
            <Route path="/Instrucoes1" component={Instrucoes1}/>
            <Route path="/Instrucoes2" component={Instrucoes2}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
