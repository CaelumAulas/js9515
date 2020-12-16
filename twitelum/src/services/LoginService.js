
export default class LoginService
{
    static getToken() {
        return localStorage.getItem('TOKEN');
    }

    static getUsuario() {
        return '';
    }
}