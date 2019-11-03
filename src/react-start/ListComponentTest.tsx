import React from "react";

interface List {
    list: Array<string>
}

class ListComponent extends React.Component<List, any> {

    render() {
        const ls = this.props.list.map((it) => (<ListItem key={it.toString()} item={it}/>));
        return <ul>{ls}</ul>;
    }
    
}

function ListItem(prop: any) {
    return <li>{prop.item}</li>
}

export default ListComponent