import LoginService from "./LoginService.js";

const TWEETS_URL_API = 'https://twitelum-api.herokuapp.com/tweets';

export default class TweetService
{
    static async like(tweetId)
    {
        const token = LoginService.getToken();
        const resposta = await fetch(`${TWEETS_URL_API}/${tweetId}/like?X-AUTH-TOKEN=${token}`, {
            method: 'POST'
        });

        const dadosLike = await resposta.json();
        return dadosLike;
    }

    static async adicionarTweet(conteudo)
    {
        const token = LoginService.getToken();
        const resposta = await fetch(`${TWEETS_URL_API}?X-AUTH-TOKEN=${token}`, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({ conteudo })
        });

        const tweetServidor = await resposta.json();
        return tweetServidor;
    }

    static async removerTweet(tweetId)
    {
        const token = LoginService.getToken();
        const resposta = await fetch(`${TWEETS_URL_API}/${tweetId}?X-AUTH-TOKEN=${token}`, {
            method: 'DELETE'
        });

        const dadosRemocao = await resposta.json();
        return dadosRemocao;
    }

    static async carregarTweets()
    {
        const token = LoginService.getToken();
        const resposta = await fetch(`${TWEETS_URL_API}?X-AUTH-TOKEN=${token}`);
        const tweets = await resposta.json();
        return tweets;
    }
}