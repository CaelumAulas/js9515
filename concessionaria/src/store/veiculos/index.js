import VeiculosService from "../../services/VeiculosService.js";

const INITIAL_STATE = {
    lista: [],
    veiculo: null,
    erroCadastro: ''
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
    else if (action.type === 'ADICIONA_VEICULO_SUCESSO') {
        return {
            lista: [ action.payload.veiculo, ...state.lista ],
            erroCadastro: ''
        }
    }
    else if (action.type === 'ADICIONA_VEICULO_ERRO') {
        return {
            erroCadastro: action.payload.mensagem
        }
    }

    else if (action.type === 'ATUALIZA_VEICULO') {
        const index = state.lista.findIndex(v => v.id === action.payload.veiculo.id);
        state.lista[index] = action.payload.veiculo;
        return {
            lista: [...state.lista]
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

    static adicionaVeiculo(dadosCadastro)
    {
        return async function(dispatch) {
            try 
            {
                const dadosServidor = await VeiculosService.cadastrar(dadosCadastro);
                if (dadosServidor.status === 0) {
                    throw new Error(dadosServidor.message);
                }

                dispatch({ type: 'ADICIONA_VEICULO_SUCESSO', payload: { veiculo: dadosServidor.veiculo }});
            }
            catch(e)
            {
                console.log('Erro...');
                dispatch({ type: 'ADICIONA_VEICULO_ERRO', payload: { mensagem: e.message }});
            }
        }
    }

    static removeVeiculo(id, token)
    {
        return async function(dispatch) {
            const dadosExclusao = await VeiculosService.remover(id, token);
            console.log(dadosExclusao);
            dispatch({ type: 'REMOVE_VEICULO', payload: { veiculoId: id } });
        }
    }
}