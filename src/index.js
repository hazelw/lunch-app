import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import main from './reducers';
import App from './components/App';
import './index.css';

console.log("main:");
console.log(main);

let store = createStore(main);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
