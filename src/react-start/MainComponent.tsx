import React from "react";
import ListComponent from "./ListComponentTest";
import FormComponent from "./FormComponentTest";
import MessageDialogComponent from "./ComposeAndExtendTest";
import AntdComponent from "../antd/FirstSample";
import TestPropsComponent from "./ComponentTest";
import StudentComponent from "./TypeScriptTest";
import Component from "./ComponentTest2";
import StateComponent from "./ComponentStatTest";
import EventTestComponent from "./EventTest";
import ShareStateBComponent from "./ShareStateComponentTest";


let a = 'hello world';
const element = React.createElement('h2', {}, 'This is react element');

class ReactSampleComponent extends React.Component {

    render() {
        return <div>
            <MessageDialogComponent/>
            <h1>typescript {a}</h1>
            <Hello/>
            <TestPropsComponent firstName="Jack" lastName="Ham"/>
            <StudentComponent/>
            <Component first="Hellow"/>
            {element}
            <p>this is component state:<StateComponent name="ThisIsProp_Name"/></p>
            <EventTestComponent/>
            <ShareStateBComponent/>
            <p>list component:</p>
            <ListComponent list={['AAA', 'BBB', 'CCC', 'DDD']}/>
            <FormComponent/>

        </div>
    }
}


const Hello: React.FC = () => {
    return (
        <a href="https://baidu.com">hello, <World/></a>
    )
};

const World: React.FC = function () {
    return (<b>World</b>)
};

export default ReactSampleComponent