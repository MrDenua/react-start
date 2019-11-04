import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StateComponent from "./react-start/ComponentStatTest";
import * as serviceWorker from './serviceWorker';
import {ComponentFun} from "./react-start/ComponentTest";

// ReactDOM.render(<ComponentFun name="nick"/>, document.getElementById('container'));
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
