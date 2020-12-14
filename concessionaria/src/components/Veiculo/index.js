import { Link } from "react-router-dom";
import formatar from "../../lib/FormataMoeda.js";

export default function Veiculo(props)
{
    const removerVeiculoHandler = (event) => {
        // excluir o veículo no back-end

        props.exclusaoCallback(/* id do veículo */);
    }

    return(
        <div className="card p-2 my-3">
            <div className="row">
                <div className="col-md-3">
                    <img src={props.foto} alt="" className="img-thumbnail img-fluid" />
                </div>
                <div className="col-md-9 p-3">
                    <h3>{props.modelo}</h3>
                    <p>
                        <strong>Marca:</strong> {props.marca} <br />
                        <strong>Preço:</strong> {formatar(props.preco)} <br />
                        <strong>Cor:</strong> {props.cor}
                    </p>
                    <p>
                        {props.descricao}
                    </p>
                    <p className="text-right">
                        <Link to={`/editar?id=${props.id}`} className="btn btn-primary">Editar</Link>
                        <button onClick={removerVeiculoHandler} className="btn btn-danger">Excluir</button>
                    </p>
                </div>
            </div>
        </div>
    );
}