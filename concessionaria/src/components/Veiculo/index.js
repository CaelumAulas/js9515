import { Link } from "react-router-dom";
import formatar from "../../lib/FormataMoeda.js";

export default function Veiculo(props)
{
    const removerVeiculoHandler = async (event) => {
        // excluir o veículo no back-end
        const token = localStorage.getItem('logado');
        const id = props.id;

        const params = new URLSearchParams();
        params.append('token', token);
        params.append('id', id);

        let urlDelete = 'https://api-concessionaria.herokuapp.com/excluir-veiculo.php?' + params;
        const resposta = await fetch(urlDelete, { method: 'DELETE' });
        const dadosExclusao = await resposta.json();
        console.log(dadosExclusao);

        if (dadosExclusao.status === 1) {
            props.exclusaoCallback(id);
            alert(dadosExclusao.message);
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