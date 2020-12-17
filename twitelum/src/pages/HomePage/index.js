import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Helmet from 'react-helmet';
import LoginService from '../../services/LoginService.js';
import { ReactReduxContext } from 'react-redux';
import { TweetsThunkActions } from '../../store/tweets/index.js';
import FormAddTweet from '../../components/FormAddTweet/index.js';
import TweetsContainer from '../../components/TweetsContainer/index.js';

class HomePage extends Component {
    static contextType = ReactReduxContext;

    constructor() {
        super();
        this.state = {
            tweets: [],
            usuario: LoginService.getUsuario()
        }
    }

    async componentDidMount() {
        const { store } = this.context;
        store.subscribe(() => {
            this.setState({
                tweets: store.getState().tweets.lista
            });
        });

        store.dispatch(TweetsThunkActions.carregaTweets());
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>Twitelum - Home ({`${this.state.tweets.length}`})</title>
                </Helmet>
                <Cabecalho>
                    <NavMenu usuario={`@${this.state.usuario}`} />
                </Cabecalho>
                <div className="container">
                    <Dashboard>
                        <Widget>
                            <FormAddTweet />
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <TweetsContainer tweets={this.state.tweets} />
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
