import React from "react";

class ComponentTest2 extends React.Component{
    render() {
        return <h3>{this.props.first}</h3>
    }
}

export default function Component(prop) {
    return <ComponentTest2 first={prop.first}/>
}