import React from 'react';
import './App.css';
import TestPropsComponent from "./ComponentTest";
import './TypeScriptTest'
import './ComponentTest2'
import StudentComponent from "./TypeScriptTest";
import Component from "./ComponentTest2";
import StateComponent from "./ComponentStatTest";
import EventTestComponent from "./EventTest";
import ListComponent from "./ListComponentTest";
import FormComponent from "./FormComponentTest";

let a = 'hello world';
const element = React.createElement('h2', {}, 'This is react element');

const App: React.FC = () => {
    return (
        <div>
            <div className="App">
                <h1>typescript {a}</h1>
                <Hello/>
                <TestPropsComponent firstName="Jack" lastName="Ham"/>
                <StudentComponent/>
                <Component first="Hellow"/>
                {element}
                <p>this is component state:<StateComponent name="ThisIsProp_Name"/></p>
                <EventTestComponent/>
            </div>
            <p>list component:</p>
            <ListComponent list={['AAA', 'BBB', 'CCC', 'DDD']}/>
            <FormComponent/>
        </div>

    );
};

const Hello: React.FC = () => {
    return (
        <a href="https://baidu.com">hello, <World/></a>
    )
};

const World: React.FC = function () {
    return (<b>World</b>)
};

export default App;