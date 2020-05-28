import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './index.scss';
import App from './App';
import {
    createStore,
    applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from "./reducers/orderReducers";
import * as serviceWorker from '../../asset/serviceWorker';
const store = createStore(
    reducers,
    {
        departStation: '',
        arriveStation: '',
        departTime: null,
        arriveTime: null,
        timeDuration: null,
        trainNumber: null,
        trainType: null,
        price: null,
        passengers: [],
        totalPrice: null
    },
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
