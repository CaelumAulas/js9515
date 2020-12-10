import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';

export default class Routing extends Component {
    render() {
        return (
            <Switch>
                <PrivateRoute path="/" component={HomePage} exact />
                <Route path="/login" component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
        );
    }
}

class PrivateRoute extends Component {
    estaAutenticado() {
        if (localStorage.getItem('TOKEN')) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        const { component: Componente, ...propriedades } = this.props;

        if (!this.estaAutenticado()) {
            return <Redirect to="/login" />
        }
        else {
            return <Componente {...propriedades} />
        }
    }
}