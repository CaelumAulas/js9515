import VeiculosService from "../../services/VeiculosService.js";

const INITIAL_STATE = {
    lista: [],
    veiculo: null
}

export function veiculosReducer(state = INITIAL_STATE, action = {})
{
    // ações de manipulação do state
    if (action.type === 'CARREGA_VEICULOS') {
        const veiculos = action.payload.lista;
        return {
            lista: veiculos
        }
    }

    return state;
}

// Operações assíncronas que retornam uma ação de manipulação do state
export class VeiculosThunkActions
{
    static carregaVeiculos()
    {
        return async function(dispatch) {
            const listaDeVeiculosServidor = await VeiculosService.listar();
            dispatch({ type: 'CARREGA_VEICULOS', payload: { lista: listaDeVeiculosServidor }});
        }
    }

    static adicionaVeiculo()
    {

    }

    static removeVeiculo()
    {

    }

    static atualizaVeiculo()
    {

    }

    static getVeiculo()
    {

    }
}