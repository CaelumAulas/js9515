import { useState } from "react";
import MasterPage from "../../components/MasterPage/index.js";

export default function LoginPage(props)
{
    const [state, setState] = useState({ msg: '' });

    const renderMsg = _ => state.msg && <div className="alert alert-danger">{state.msg}</div>

    const loginHandler = (event) => {
        event.preventDefault();
        const { usuario, senha } = event.target;

        if (usuario.value === 'caelum' && senha.value === 'js46') {
            localStorage.setItem('logado', 'true');
            props.history.push('/cadastro');
            setState({ msg: '' })
        }
        else {
            event.target.reset();
            usuario.focus();
            setState({ msg: 'Login inválido!' })
        }
    }

    return (
        <MasterPage>
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