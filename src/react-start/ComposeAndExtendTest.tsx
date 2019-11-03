import React from "react";


class DialogComponent extends React.Component {

    render() {
        return <p>
            DialogComponent
            <p className="MessageDialogComponent"/>
            {this.props.children}
        </p>
    }
}

class MessageDialogComponent extends React.Component {
    render() {
        return <DialogComponent>
            This is message<br/>
            <input type="submit" value="ok"/>
        </DialogComponent>
    }
}

export default MessageDialogComponent