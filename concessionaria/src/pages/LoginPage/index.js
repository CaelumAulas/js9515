import { useState } from "react";
import MasterPage from "../../components/MasterPage/index.js";

export default function LoginPage(props)
{
    const [state, setState] = useState({ msg: '' });

    const renderMsg = _ => state.msg && <div className="alert alert-danger">{state.msg}</div>

    const loginHandler = async (event) => {
        event.preventDefault();
        const { usuario, senha } = event.target;

        // FormData não se deve especificar headers na requisição de envio
        const dados = new FormData(event.target);
        dados.append('usuario', usuario.value);
        dados.append('senha', senha.value);

        try 
        {
            let urlPost = 'https://api-concessionaria.herokuapp.com/login.php';
            const resposta = await fetch(urlPost, {
                method: 'POST',
                body: dados
            });

            const dadosServidor = await resposta.json();
            if (dadosServidor.status === 0) {
                alert(dadosServidor.message);
                return;
            }

            setState({ msg: '' });
            localStorage.setItem('logado', dadosServidor.token);
            props.history.push('/cadastro');
        }
        catch(e)
        {
            alert('Erro ao realizar login!');
            console.error(e);
        }
    }

    return (
        <MasterPage title="Login">
            <section className="card">
                <header className="card-header p-3">
                    <h2>Acesso Restrito</h2>
                </header>
                <div className="card-body p-3">
                    { renderMsg() }
                    <form onSubmit={loginHandler} method="POST">
                        <div className="form-group">
                            <label>Usuário:</label>
                            <input name="usuario" type="text" className="form-control" placeholder="Insira seu usuário aqui..." />
                        </div>
                        <div className="form-group">
                            <label>Senha:</label>
                            <input name="senha" type="password" className="form-control" placeholder="Insira sua senha aqui..." />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </MasterPage>
    );
}