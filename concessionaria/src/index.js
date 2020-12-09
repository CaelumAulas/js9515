import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroPage from './pages/CadastroPage/index.js';
import EditarPage from './pages/EditarPage/index.js';
import HomePage from './pages/HomePage';
import ListagemPage from './pages/ListagemPage/index.js';
import NotFoundPage from './pages/NotFoundPage/index.js';
import SobrePage from './pages/SobrePage/index.js';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/sobre" component={SobrePage} />
        <Route path="/listagem" component={ListagemPage} />
        <Route path="/editar" component={EditarPage} />
        <Route path="/cadastro" component={CadastroPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

