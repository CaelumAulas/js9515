import React, { Component, Fragment } from 'react';
import Cabecalho from '../../components/Cabecalho'
import NavMenu from '../../components/NavMenu'
import Dashboard from '../../components/Dashboard'
import Widget from '../../components/Widget'
import TrendsArea from '../../components/TrendsArea'
import Tweet from '../../components/Tweet'
import Helmet from 'react-helmet';
import TweetService from '../../services/TweetService.js';
import LoginService from '../../services/LoginService.js';
import { ReactReduxContext } from 'react-redux';
import { TweetsThunkActions } from '../../store/tweets/index.js';

class HomePage extends Component {
    static contextType = ReactReduxContext;

    constructor() {
        super();
        this.state = {
            novoTweet: '',
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

    adicionarTweet = async (event) => {
        event.preventDefault();

        if (this.state.novoTweet.length > 0) {
            const tweetServidor = await TweetService.adicionarTweet(this.state.novoTweet);
            this.setState({
                novoTweet: '',
                tweets: [tweetServidor, ...this.state.tweets]
            });
        }
    }

    removerTweet = (idTweet) => {
        const listaAtualizada = this.state.tweets.filter(t => t._id !== idTweet);
        this.setState({
            tweets: listaAtualizada
        });
    }

    textoTweetChange = (event) => {
        let textoTweet = event.target.value;
        this.setState({
            novoTweet: textoTweet
        });
    }

    isBotaoDisabled = () => this.state.novoTweet.length > 140 || this.state.novoTweet.length === 0;
    getCssContador = () => `novoTweet__status ${this.state.novoTweet.length > 140 ? 'novoTweet__status--invalido' : ''}`;

    renderTweets = () => {
        let hasTweets = this.state.tweets.length > 0;

        if (hasTweets) {
            const listaTweets = this.state.tweets.map((tweet, index) => {
                return <Tweet
                    key={index}
                    {...tweet}
                    removerTweetCallback={this.removerTweet}
                />
            });

            return listaTweets;
        }

        return <div>Faça seu primeiro Tweet :)</div>
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
                            <form onSubmit={this.adicionarTweet} className="novoTweet">
                                <div className="novoTweet__editorArea">
                                    <span className={this.getCssContador()}>
                                        {this.state.novoTweet.length}/140
                            </span>
                                    <textarea value={this.state.novoTweet} onChange={this.textoTweetChange} className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
                                </div>
                                <button type="submit" className="novoTweet__envia" disabled={this.isBotaoDisabled()}>
                                    Tweetar
                        </button>
                            </form>
                        </Widget>
                        <Widget>
                            <TrendsArea />
                        </Widget>
                    </Dashboard>
                    <Dashboard posicao="centro">
                        <Widget>
                            <div className="tweetsArea">
                                {this.renderTweets()}
                            </div>
                        </Widget>
                    </Dashboard>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
