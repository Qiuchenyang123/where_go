import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import 'antd/dist/antd.min.css'
import './index.css';
import './index.scss';
import './asset/js/setRem'
import App from './App';
import {
    createStore,
    applyMiddleware
} from 'redux'
import thunk from "redux-thunk";
import reducer from "./reducers/indexReducer";
import {Provider} from "react-redux";
// import App from './lessonText/context'
// import App from './lessonText/contextType'
// import App from './lessonText/lazy_suspense_errorBoundary'
// import App from './lessonText/memo'
// import App from './lessonText/useState'
// import App from './lessonText/useEffect'
// import App from './lessonText/useContext'
// import App from './lessonText/todoList'
import * as serviceWorker from '../../asset/serviceWorker';
const store = createStore(reducer, {
    from: '北京',
    to: '上海',
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    departDate: Date.now(),
    isDateSelectorVisible: false,
    highSpeed: false,
}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
