const INITIAL_STATE = {
    lista: []
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
    else if (action.type === 'ADICIONA_VEICULO') {
        return {
            lista: [ action.payload.veiculo, ...state.lista ]
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