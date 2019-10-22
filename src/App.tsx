import React from 'react';
import './App.css';

let a = 'hello world';
const element = React.createElement('h2', {}, 'This is react element');

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>typescript {a}</h1>
            <Hello/>
          {element}
        </div>
    );
};

const Hello: React.FC = () => {
    return (
        <a href="#">hello, <World/></a>
    )
};

const World: React.FC = function () {
    return (<b>World</b>)
};

export default App;