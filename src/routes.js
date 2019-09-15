import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Menu from './pages/Menu'
import Contrato from './pages/Contrato'
import TelaInstrucao1 from './pages/TelaInstrucao1'
import TelaInstrucao2 from './pages/TelaInstrucao2'
import TelaInstrucao3 from './pages/TelaInstrucao3'
import TelaInstrucao4 from './pages/TelaInstrucao4'
import TelaInstrucao5 from './pages/TelaInstrucao5'

export default function Routes() {
    return ( 
        <BrowserRouter>
            <Route path = "/" exact component = {Menu} />
            <Route path = "/contrato" component = {Contrato} />
            <Route path = "/telaInstrucao1" component = {TelaInstrucao1} />
            <Route path = "/telaInstrucao2" component = {TelaInstrucao2} />
            <Route path = "/telaInstrucao3" component = {TelaInstrucao3} />
            <Route path = "/telaInstrucao4" component = {TelaInstrucao4} />
            <Route path = "/telaInstrucao5" component = {TelaInstrucao5} />
            
        </BrowserRouter>
    );
}