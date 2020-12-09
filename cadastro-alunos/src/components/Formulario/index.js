import { Fragment, useRef } from "react";

export default function Formulario(props)
{
    // criar as referências para atribuir aos elementos da interface
    const inputNome = useRef();
    const inputEmail = useRef();
    const inputTelefone = useRef();
    const inputSerie = useRef();
    const inputN1 = useRef();
    const inputN2 = useRef();
    const inputN3 = useRef();
    const inputN4 = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const dadosDoAluno = {};
        const listaCampos = [inputNome, inputEmail, inputTelefone, inputSerie, inputN1, inputN2, inputN3, inputN4];

        for (let campo of listaCampos)
        {
            const input = campo.current;

            if (!input.value.trim()) {
                alert(input.dataset.mensagem);
                input.focus();
                return;
            }
            else {
                let id = input.id;
                dadosDoAluno[id] = input.type === 'number' ? parseFloat(input.value) : input.value;
            }
        }

        event.target.reset();
        props.cadastroCallback(dadosDoAluno);
    }

    return (
        <Fragment>
            <form onSubmit={submitHandler} method="POST">
                <div className="row">
                    <div className="form-group col-md-6">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" className="form-control" ref={inputNome} data-mensagem="Nome é obrigatório!" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" className="form-control" ref={inputEmail} data-mensagem="E-mail é obrigatório!" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" id="telefone" className="form-control" ref={inputTelefone} data-mensagem="Telefone é obrigatório!" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="serie">Série:</label>
                        <input type="text" id="serie" className="form-control" ref={inputSerie} data-mensagem="Série é obrigatório!" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="n1">Nota 1:</label>
                        <input type="number" id="n1" step=".1" className="form-control" ref={inputN1} data-mensagem="Nota 1 é obrigatória!" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="n1">Nota 2:</label>
                        <input type="number" id="n2" step=".1" className="form-control" ref={inputN2} data-mensagem="Nota 2 é obrigatória!" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="n1">Nota 3:</label>
                        <input type="number" id="n3" step=".1" className="form-control" ref={inputN3} data-mensagem="Nota 3 é obrigatória!" />
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="n1">Nota 4:</label>
                        <input type="number" id="n4" step=".1" className="form-control" ref={inputN4} data-mensagem="Nota 4 é obrigatória!" />
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