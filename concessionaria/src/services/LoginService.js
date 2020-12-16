export default class LoginService
{
    static async login(usuario, senha)
    {
        const dados = new FormData();
        dados.append('usuario', usuario);
        dados.append('senha', senha);

        let urlPost = 'https://api-concessionaria.herokuapp.com/login.php';
        const resposta = await fetch(urlPost, {
            method: 'POST',
            body: dados
        });

        const dadosServidor = await resposta.json();
        if (dadosServidor.status === 0) {
            throw new Error(dadosServidor.message);
        }

        localStorage.setItem('logado', dadosServidor.token);
        return true;
    }

    static getToken()
    {
        return localStorage.getItem('logado');
    }
}