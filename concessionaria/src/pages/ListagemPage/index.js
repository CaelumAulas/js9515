import { useEffect, useState } from "react";
import MasterPage from "../../components/MasterPage/index.js";
import Veiculo from "../../components/Veiculo/index.js";
import VeiculosService from "../../services/VeiculosService.js";

export default function ListagemPage()
{
    const [listaVeiculos, setState] = useState([]);

    const carregarVeiculos = async () => {
        // busca todos os veículos na API
        // e joga os objetos retornados na lista do state do componente
        const listaDeVeiculosServidor = await VeiculosService.listar();
        setState(listaDeVeiculosServidor);
    }

    const exclusaoHandler = (idVeiculo) => {
        // excluir o veículo indicado no estado da aplicação
        const listaFiltrada = listaVeiculos.filter(v => v.id !== idVeiculo);
        setState(listaFiltrada);
    }
    
    /**
     * componentDidMount: se especificado um array de dependências vazio
     * componentDidUpdate: se nenhum array for especificado ou um array com variáveis que indicam quando o evento deve ser disparado
     * componentWillUnmount: se especificada uma função de retorno dentro do callback de useEffect
     */
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