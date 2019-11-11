import React from "react";
import {Route} from "react-router";
import {Link} from "@material-ui/core";

class ReactRouterDemoComponent extends React.Component {

    render() {
        return (<div>
            <ul>
                <li><Link>A</Link></li>
                <li><Route path="/home" component={Comp}/></li>
            </ul>
        </div>)
    }
}

function Comp(pop: any) {
    return (<div>Comp</div>)
}

export default ReactRouterDemoComponent