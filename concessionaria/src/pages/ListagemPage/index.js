import { useContext, useEffect, useState } from "react";
import { ReactReduxContext } from "react-redux";
import MasterPage from "../../components/MasterPage/index.js";
import Veiculo from "../../components/Veiculo/index.js";
import VeiculosService from "../../services/VeiculosService.js";

export default function ListagemPage()
{
    const { store } = useContext(ReactReduxContext);
    const [listaVeiculos, setState] = useState([]);
    
    const carregarVeiculos = async () => {
        // se não tem nada no state ainda...
        if (store.getState().veiculos.lista.length === 0) {
            // buscamos as informações no servidor para popular o state com os dados
            const listaDeVeiculosServidor = await VeiculosService.listar();
            store.dispatch({ type: 'CARREGA_VEICULOS', payload: { lista: listaDeVeiculosServidor }});
        }
        else {
            console.log('Carregando a lista que já está no state...');
            setState(store.getState().veiculos.lista);
        }
    }
    
    /**
     * componentDidMount: se especificado um array de dependências vazio
     * componentDidUpdate: se nenhum array for especificado ou um array com variáveis que indicam quando o evento deve ser disparado
     * componentWillUnmount: se especificada uma função de retorno dentro do callback de useEffect
     */
    useEffect(() => {
        
        // me inscrever no store do redux
        const unsubscribe = store.subscribe(() => {
            setState(store.getState().veiculos.lista);
        });

        carregarVeiculos();

        // componentWillUnmount
        return () => {
            unsubscribe();
        }

    }, [store]);

    return (
        <MasterPage title="Nossos Veículos">
            <section>
                <header className="card-header p-3 mb-3">
                    <h2>Veja os nossos veículos</h2>
                </header>

                { listaVeiculos.map((veiculo, index) => <Veiculo key={index} {...veiculo} />) }
            </section>
        </MasterPage>
    );
}