import React from 'react';
import './App.css';
import './react-start/TypeScriptTest';
import './react-start/ComponentTest2';
import './react-start/MainComponent';
import ReactSampleComponent from "./react-start/MainComponent";
import './md/MaterialUI'
import MaterialUI from "./md/MaterialUI";

const App: React.FC = () => {
    return (
        <div>
            <div className="App">
                <MaterialUI/>
                {/*<ReactSampleComponent/>*/}
            </div>
        </div>

    );
};

export default App;