import { createRef, Fragment } from 'react';

export default function Formulario(props)
{
    const inputNumero = createRef();

    const submitHandler = (event) => {
        event.preventDefault();
        let numero = parseInt(inputNumero.current.value.trim());

        if (isNaN(numero)) {
            alert('Por favor, preencha o campo com um número válido!');
            inputNumero.current.focus();
            return;
        }

        props.submitCallback(numero);
    }

    return (
        <Fragment>
            <form onSubmit={submitHandler} className="card p-3">
                <div className="form-group">
                    <label>Número:</label>
                    <input ref={inputNumero} type="text" placeholder="Digite o seu número aqui..." className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        Ver Tabuada
                    </button>
                </div>
            </form>
            <hr />
        </Fragment>
        
    );
}