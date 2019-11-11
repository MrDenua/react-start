import React from 'react';
import './App.css';
import './react-start/TypeScriptTest';
import './react-start/ComponentTest2';
import './react-start/MainComponent';
import ReactSampleComponent from "./react-start/MainComponent";
import './md/MaterialUI'
import MaterialUI from "./md/MaterialUI";
import Start from "./ts/Start";
import f from "./ts/Start";
import ReactRouterDemoComponent from "./router/ReactRouterDemo";

const App: React.FC = () => {

    return (
        <div>
            <div className="App">
                <MaterialUI/>
                {/*<ReactRouterDemoComponent/>*/}
                {/*<ReactSampleComponent/>*/}
            </div>
        </div>

    );
};

export default App;