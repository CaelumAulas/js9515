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
}