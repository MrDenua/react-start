import React, {Component} from "react";
import {Route} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";


// const history = createHashHistory;
class ReactRouterDemoComponent extends React.Component {

    render() {
        return (<div>
            {/*<Router history={history}>*/}
            {/**/}
            {/*</Router>*/}
            <BrowserRouter>
                <Route path="/" component={MainComp}>

                    <Link to="/">index</Link><br/>
                    <Link to="/home">home</Link><br/>
                    <Link to="/about">about</Link><br/>
                    <Link to="/product">product</Link>

                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={Home}/>
                    <Route path="/product" component={Home}>
                        <Route path="info/:id" component={ProductInfo}/>
                    </Route>
                </Route>
            </BrowserRouter>
        </div>)
    }
}

function ProductInfo(prop: any) {
    return (<div>
        info
    </div>)
}

function MainComp(prp: any) {
    return (<div>
        {prp.params.children}
    </div>)
}

function Home(pop: any) {
    return (<div>This is home.</div>)
}

function isComp(c: React.Component | String): c is Component {
    return c !== undefined
}

export default ReactRouterDemoComponent