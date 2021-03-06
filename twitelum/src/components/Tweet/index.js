import React, { Component } from 'react'
import './tweet.css'
import PropTypes from 'prop-types';
import TweetService from '../../services/TweetService.js';
import { ReactReduxContext } from 'react-redux';
import { TweetsThunkActions } from '../../store/tweets/index.js';

class Tweet extends Component {
    static contextType = ReactReduxContext;

    static defaultProps = {
        likeado: false,
        totalLikes: 0
    }

    constructor(props) {
        super(props);
        this.state = {
            likeado: props.likeado,
            totalLikes: props.totalLikes
        }
    }

    removeHandler = async () => {
        this.context.store.dispatch(TweetsThunkActions.removeTweet(this.props._id));
    }

    likeHandler = async () => {
        const tweetId = this.props._id;
        // se está curtido, descurte o tweet, caso contrário curte o tweet
        let likeado = this.state.likeado ? false : true;
        // se o tweet foi curtido, soma mais um no total de likes, caso contrário subtrai
        let totalLikes = likeado ? this.state.totalLikes + 1 : this.state.totalLikes - 1;

        this.setState({
            likeado,
            totalLikes
        });

        const dadosServer = await TweetService.like(tweetId);
        console.log(dadosServer);
    }

    render() {
        return (
            <article className="tweet">
                <div className="tweet__cabecalho">
                    <img className="tweet__fotoUsuario" src={this.props.usuario.foto} alt="" />
                    <span className="tweet__nomeUsuario">{this.props.usuario.nome}</span>
                    <a href="/"><span className="tweet__userName">@{this.props.usuario.login}</span></a>
                </div>
                <p className="tweet__conteudo">
                    { this.props.conteudo }
                </p>
                <footer className="tweet__footer">
                    <button onClick={this.likeHandler} className="btn btn--clean">
                        <svg className={`icon icon--small iconHeart ${this.state.likeado ? 'iconHeart--active' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5">
                            <defs>
                                <clipPath id="a">
                                    <path d="M0 38h38V0H0v38z"></path>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
                                <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.632-8.018-4.128-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.773.098-1.52.266-2.242C2.75 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.47.268 2.241"></path>
                            </g>
                        </svg>
                        {this.state.totalLikes}
                    </button>
                    {
                        this.props.removivel &&
                        <button onClick={this.removeHandler} className="btn btn--blue btn--remove">
                            X
                        </button>
                    }
                </footer>
            </article>
        )
    }
}

Tweet.propTypes = {
    _id: PropTypes.string,
    conteudo: PropTypes.string.isRequired,
    usuario: PropTypes.shape({
        foto: PropTypes.string,
        nome: PropTypes.string,
        login: PropTypes.string
    }).isRequired,
    likeado: PropTypes.bool.isRequired,
    totalLikes: PropTypes.number.isRequired,
    removivel: PropTypes.bool,
    removerTweetCallback: PropTypes.func
}

export default Tweet