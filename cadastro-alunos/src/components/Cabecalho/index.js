import { Fragment } from 'react';
export default function Cabecalho(props)
{
    return (
        <Fragment>
            <h1 className="display-4">{ props.titulo }</h1>
            <hr />
        </Fragment>
    );
}