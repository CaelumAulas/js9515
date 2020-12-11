import { useEffect } from "react";
import { Link } from "react-router-dom";
import MasterPage from "../../components/MasterPage/index.js";

export default function ListagemPage()
{
    useEffect(() => {
        // buscar os dados no servidor
        // jogar a lista no estado do componente
    });

    return (
        <MasterPage title="Nossos Veículos">
            <section>
                <header className="card-header p-3 mb-3">
                    <h2>Veja os nossos veículos</h2>
                </header>
                <div className="card p-2 my-3">
                    <div className="row">
                        <div className="col-md-3">
                            <img src="https://placehold.it/400x400" alt="" className="img-thumbnail img-fluid" />
                        </div>
                        <div className="col-md-9 p-3">
                            <h3>Modelo do Veículo</h3>
                            <p>
                                <strong>Marca:</strong> Marca do Veículo <br />
                                <strong>Preço:</strong> R$ 12.500,00 <br />
                                <strong>Cor:</strong> Preto
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, repudiandae voluptas maxime optio consequatur tempora assumenda quod doloribus dignissimos exercitationem quo eos voluptatibus. Facilis sit, vero eos exercitationem nobis itaque.
                            </p>
                            <p className="text-right">
                                <Link to="/editar" className="btn btn-primary">Editar</Link>
                                <button className="btn btn-danger">Excluir</button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </MasterPage>
    );
}