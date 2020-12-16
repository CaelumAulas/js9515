import { createStore } from 'redux';

const store = createStore(function(state = [], action = {}) {

    if (action.type === 'CARREGA_TWEETS') {
        return action.tweets;
    }

    return state;
});

window.store = store;