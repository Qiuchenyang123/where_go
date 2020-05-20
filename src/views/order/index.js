import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css'
import './index.scss';
import App from './App';
// import App from './lessonText/context'
// import App from './lessonText/contextType'
// import App from './lessonText/lazy_suspense_errorBoundary'
// import App from './lessonText/memo'
// import App from './lessonText/useState'
// import App from './lessonText/useEffect'
// import App from './lessonText/useContext'
// import App from './lessonText/todoList'
import * as serviceWorker from '../../asset/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
