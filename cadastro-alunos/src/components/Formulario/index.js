import { Fragment } from "react";

export default function Formulario(props)
{
    // criar as referências para atribuir aos elementos da interface
    
    const submitHandler = (event) => {
        event.preventDefault();
        const dadosDoAluno = {};

        // coletar os dados do formulário
        // validar esses dados

        props.cadastroCallback(dadosDoAluno);
    }

    return (
        <Fragment>
            <form onSubmit={submitHandler} method="POST">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" id="telefone" className="form-control" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="serie">Série:</label>
                        <input type="text" id="serie" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="n1">Nota 1:</label>
                        <input type="number" id="n1" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="n1">Nota 2:</label>
                        <input type="number" id="n2" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="n1">Nota 3:</label>
                        <input type="number" id="n3" className="form-control" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="n1">Nota 4:</label>
                        <input type="number" id="n4" className="form-control" />
                    </div>
                    <div className="form-group col-md-12">
                        <button className="btn btn-primary">
                            Cadastrar
                        </button>
                    </div>
                </div>
            </form>
            <hr />
        </Fragment>
    );
}