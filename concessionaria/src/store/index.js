import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { veiculosReducer } from './veiculos/index.js';

const store = createStore(
    combineReducers({
        veiculos: veiculosReducer
    }),
    applyMiddleware(thunkMiddleware)
);

export default store;