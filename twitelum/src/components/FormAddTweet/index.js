import { useContext, useState } from "react";
import { ReactReduxContext } from "react-redux";
import { TweetsThunkActions } from "../../store/tweets/index.js";

export default function FormAddTweet()
{
    const { store } = useContext(ReactReduxContext);
    const [novoTweet, setNovoTweet] = useState('');

    const adicionarTweet = async (event) => {
        event.preventDefault();

        if (novoTweet.length > 0) {
            // disparar uma ação no TweetThunkActions
            store.dispatch(TweetsThunkActions.adicionaTweet(novoTweet));
            setNovoTweet('');
        }
    }

    return (
        <form onSubmit={adicionarTweet} className="novoTweet">
            <div className="novoTweet__editorArea">
                <span className={`novoTweet__status ${novoTweet.length > 140 && 'novoTweet__status--invalido'}`}>
                    {novoTweet.length}/140
                </span>
                <textarea value={novoTweet} onChange={(e) => setNovoTweet(e.target.value)} className="novoTweet__editor" placeholder="O que está acontecendo?"></textarea>
            </div>
            <button type="submit" className="novoTweet__envia" disabled={novoTweet.length > 140 || novoTweet.length === 0}>
                Tweetar
            </button>
        </form>
    );
}