import React, { Component, Fragment } from 'react'
import Helmet from 'react-helmet'
import Cabecalho from '../../components/Cabecalho'
import Widget from '../../components/Widget'
import LoginService from '../../services/LoginService.js'

import './loginPage.css'

class LoginPage extends Component {
    constructor() {
        super();
        this.inputLogin = React.createRef();
        this.inputSenha = React.createRef();
    }

    fazerLogin = async (event) => {
        event.preventDefault();
        let login = this.inputLogin.current.value;
        let senha = this.inputSenha.current.value;

        try 
        {
            await LoginService.login(login, senha);
            // Redirecionamentos via código no React Router DOM
            this.props.history.push('/');
        }
        catch(e)
        {
            alert('Erro ao realizar login. Tente novamente mais tarde!');
            console.error(e);
        }
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Twitelum - Login</title>
                </Helmet>
                <Cabecalho />
                <div className="loginPage">
                    <div className="container">
                        <Widget>
                            <h2 className="loginPage__title">Seja bem vindo!</h2>
                            <form onSubmit={ this.fazerLogin } className="loginPage__form" action="/">
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="login">Login</label> 
                                    <input ref={this.inputLogin} className="loginPage__input" type="text" id="login" name="login"/>
                                </div>
                                <div className="loginPage__inputWrap">
                                    <label className="loginPage__label" htmlFor="senha">Senha</label> 
                                    <input ref={this.inputSenha} className="loginPage__input" type="password" id="senha" name="senha"/>
                                </div>
                                {/* <div className="loginPage__errorBox">
                                    Mensagem de erro!
                                </div> */}
                                <div className="loginPage__inputWrap">
                                    <button className="loginPage__btnLogin" type="submit">
                                        Logar
                                    </button>
                                </div>
                            </form>
                        </Widget>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default LoginPage