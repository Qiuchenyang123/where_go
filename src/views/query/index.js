import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './index.scss';
import App from './App';
import * as serviceWorker from '../../asset/serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import { Provider } from "react-redux";
import reducer from './reducers/queryReducer'
import thunk from 'redux-thunk'
const store = createStore(reducer,
    {
        from: '',
        to: '',
    },
    applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
