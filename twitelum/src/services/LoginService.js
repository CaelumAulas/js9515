export default class LoginService
{
    static async login(usuario, senha)
    {
        const infoUsuario = {
            login: usuario, 
            senha
        }

        const resposta = await fetch('http://twitelum-api.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(infoUsuario)
        });

        if (!resposta.ok) {
            throw new Error(resposta.status);
        }

        const dadosServidor = await resposta.json();
        const token = dadosServidor.token;
        localStorage.setItem('TOKEN', token);
        localStorage.setItem('usuarioLogado', usuario);
        console.log(dadosServidor);

        return true;
    }

    static getToken() {
        return localStorage.getItem('TOKEN');
    }

    static getUsuario() {
        return localStorage.getItem('usuarioLogado');
    }
}