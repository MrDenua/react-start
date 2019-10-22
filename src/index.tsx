import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

interface Prop {
    name: string,
    age: number
}

function ComponentFun(props: any) {
    return <h1>hello, component function, {props.name}</h1>
}

ReactDOM.render(<ComponentFun name="nick"/>, document.getElementById('container'));
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
