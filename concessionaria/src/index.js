import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CadastroPage from './pages/CadastroPage/index.js';
import EditarPage from './pages/EditarPage/index.js';
import HomePage from './pages/HomePage';
import ListagemPage from './pages/ListagemPage/index.js';
import LoginPage from './pages/LoginPage/index.js';
import NotFoundPage from './pages/NotFoundPage/index.js';
import SobrePage from './pages/SobrePage/index.js';
import store from './store/index.js';
import { Provider } from 'react-redux';

function PrivateRoute(props)
{
    const { component: Componente, ...propriedades } = props;
    let isLogado = localStorage.getItem('logado');

    if (isLogado) {
      // retorna o componente da página
      return <Componente {...propriedades} />
    }
    else {
      // redirect
      return <Redirect to="/login" />
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/sobre" component={SobrePage} />
          <Route path="/listagem" component={ListagemPage} />
          <PrivateRoute path="/editar" component={EditarPage} />
          <PrivateRoute path="/cadastro" component={CadastroPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
