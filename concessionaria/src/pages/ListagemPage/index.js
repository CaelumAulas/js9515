import { useEffect, useState } from "react";
import MasterPage from "../../components/MasterPage/index.js";
import Veiculo from "../../components/Veiculo/index.js";

export default function ListagemPage()
{
    const [listaVeiculos, setState] = useState([]);

    const carregarVeiculos = async () => {
        // busca todos os veículos na API
        // e joga os objetos retornados na lista do state do componente
        const resposta = await fetch('https://api-concessionaria.herokuapp.com/listar-veiculos.php');
        const listaDeVeiculosServidor = await resposta.json();
        setState(listaDeVeiculosServidor);
    }

    const exclusaoHandler = (idVeiculo) => {
        // excluir o veículo indicado no estado da aplicação
    }
    
    useEffect(() => {
        carregarVeiculos();
    }, []);

    return (
        <MasterPage title="Nossos Veículos">
            <section>
                <header className="card-header p-3 mb-3">
                    <h2>Veja os nossos veículos</h2>
                </header>

                { listaVeiculos.map((veiculo, index) => <Veiculo key={index} {...veiculo} exclusaoCallback={exclusaoHandler} />) }
            </section>
        </MasterPage>
    );
}