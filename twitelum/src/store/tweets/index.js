import TweetService from "../../services/TweetService.js";

const INITIAL_STATE = {
    lista: []
}

export function tweetsReducer(state = INITIAL_STATE, action = {})
{
    if (action.type === "CARREGA_TWEETS") {
        const tweetsLista = { lista: action.payload.lista };
        return tweetsLista;
    }
    else if (action.type === "ADICIONA_TWEET") {
        const tweetServidor = action.payload.tweet;
        return {
            lista: [tweetServidor, ...state.lista]
        }
    }
    else if (action.type === "REMOVE_TWEET") {
        const tweetId = action.payload.tweetId;
        const listaFiltrada = state.lista.filter(tweet => tweet._id !== tweetId);
        return {
            lista: listaFiltrada
        }
    }

    return state;
}

export class TweetsThunkActions
{
    static carregaTweets() {
        return async function(dispatch) {
            const tweets = await TweetService.carregarTweets();
            dispatch({ type: 'CARREGA_TWEETS', payload: { lista: tweets }});
        }
    }

    static adicionaTweet(conteudoTweet) {
        return async function(dispatch) {
            const tweetServidor = await TweetService.adicionarTweet(conteudoTweet);
            dispatch({ type: 'ADICIONA_TWEET', payload: { tweet: tweetServidor }});
        }
    }

    static removeTweet(tweetId) {
        return async function(dispatch) {
            const statusRemocao = await TweetService.removerTweet(tweetId);
            console.log(statusRemocao);
            dispatch({ type: 'REMOVE_TWEET', payload: { tweetId }});
        }
    }
}