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
    else if (action.type === 'REMOVE_VEICULO') {
        const veiculoId = action.payload.veiculoId;
        const listaFiltrada = state.lista.filter(v => v.id !== veiculoId);
        return {
            lista: listaFiltrada
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
            console.log('Carregando dados do servidor...');
            const listaDeVeiculosServidor = await VeiculosService.listar();
            dispatch({ type: 'CARREGA_VEICULOS', payload: { lista: listaDeVeiculosServidor }});
        }
    }

    static adicionaVeiculo()
    {

    }

    static removeVeiculo(id, token)
    {
        return async function(dispatch) {
            const dadosExclusao = await VeiculosService.remover(id, token);
            console.log(dadosExclusao);
            dispatch({ type: 'REMOVE_VEICULO', payload: { veiculoId: id } });
        }
    }

    static atualizaVeiculo()
    {

    }

    static getVeiculo()
    {

    }
}