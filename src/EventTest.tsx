import React from "react";

interface Switch {
    toggleOn: boolean
}
class EventTestComponent extends React.Component<any, Switch> {

    constructor(props: any) {
        super(props);
        this.state = {toggleOn: false};
        // For use 'this' in 'clickEvent'
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent(e: React.MouseEvent) {
        e.preventDefault();
        this.setState((state: Switch, props: any) => ({
            toggleOn: !state.toggleOn
        }));
    }

    render() {
        // This way make certain the 'this' is class, but will create different call back when each time render.
        // return <button onClick={(e)=>this.clickEvent(e)}>TestClickEvent:{this.state.toggleOn ? 'ON' : 'OFF'}</button>;
        return <button onClick={this.clickEvent}>TestClickEvent:{this.state.toggleOn ? 'ON' : 'OFF'}</button>;
    }
}

export default EventTestComponent