import { Fragment } from 'react';

export default function Formulario()
{
    return (
        <Fragment>
            <form className="card p-3">
                <div className="form-group">
                    <label>Número:</label>
                    <input type="text" placeholder="Digite o seu número aqui..." className="form-control" />
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