import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { tweetsReducer } from './tweets/index.js';

const store = createStore(
    combineReducers({
        // todos os reducers que devem ser monitorados pelo redux
        tweets: tweetsReducer
    }),
    applyMiddleware(thunkMiddleware)
);

export default store;