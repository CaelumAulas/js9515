import { useContext } from "react";
import { ReactReduxContext } from "react-redux";
import { Link } from "react-router-dom";
import formatar from "../../lib/FormataMoeda.js";
import LoginService from "../../services/LoginService.js";
import { VeiculosThunkActions } from "../../store/veiculos/index.js";

export default function Veiculo(props)
{
    const { store } = useContext(ReactReduxContext);

    const removerVeiculoHandler = async (event) => {
        // excluir o veículo no back-end
        try 
        {
            const token = LoginService.getToken();
            const id = props.id;
            store.dispatch(VeiculosThunkActions.removeVeiculo(id, token));
        }
        catch(e)
        {
            alert(e.message);
            console.error(e);
        }
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