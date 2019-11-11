import React from 'react';
import './App.css';
import './react-start/TypeScriptTest';
import './react-start/ComponentTest2';
import './react-start/MainComponent';
import ReactSampleComponent from "./react-start/MainComponent";
import './md/MaterialUI'
import MaterialUI from "./md/MaterialUI";


    const App: React.FC = main;

    function main() {
        return (
            <div className="App">
                <MaterialUI/>
                {/*<ReactRouterDemoComponent/>*/}
                {/*<ReactSampleComponent/>*/}

                {/*<MaterialUI/>*/}
                <ReactSampleComponent/>
            </div>
        );
    }

    export default App;