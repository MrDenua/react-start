import React from "react";
import {version, Button} from "antd"
import ReactDOM from "react-dom"

import "antd/dist/antd.css"
import "../index.css"
import {type} from "os";


class AntdComponent extends React.Component {

    render() {
        return <div>
            <div>Current antd version: {version}</div>
            <div style={{marginTop: "16px"}}>
                <Button type="primary">Example button</Button>
            </div>
        </div>
    }
}

export default AntdComponent