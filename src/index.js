import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import TodoList from './TodoList';
// serviceWorker是用来做PWA，第二次访问不需要联网
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<TodoList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
