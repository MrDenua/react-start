import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";


class MaterialUI extends React.PureComponent {

    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                    Hello World.
                </Button>
            </div>
        )
    }
}

export default MaterialUI