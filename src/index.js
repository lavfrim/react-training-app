import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initState = {
    count: 0,
    parentMsg: 'parent message from redux',
    subChildMsg: 'subChildMsg message from redux',
    message: 'the are no message',
}

function reducer(state = initState, action) {
    switch (action.type) {
        case 'COUNT_ADD':
          return { ...state, count: state.count + action.payload }
        case 'ADD_MESSAGE':
            return {...state, message: action.payload }
        default:
          return state
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

