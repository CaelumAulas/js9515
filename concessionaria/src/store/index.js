import { combineReducers, createStore } from 'redux';
import { veiculosReducer } from './veiculos/index.js';

const store = createStore(
    combineReducers({
        veiculos: veiculosReducer
    })
);

export default store;