import { Fragment } from 'react';

export default function Cabecalho(props)
{
    return (
        <Fragment>
            <h1 className="display-3">{ props.titulo }</h1>
            <p className="lead">
                { props.frase }
            </p>
            <hr />
        </Fragment>
    );
}