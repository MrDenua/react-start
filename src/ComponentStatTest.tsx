import React from "react";


let style = {
    background: "red"
};

interface Props {
    name: string
    value?: number // this is optional prop
}

interface State {
    time: Date
}

class StateComponent extends React.PureComponent<Props, State> {

    private readonly _name: string;
    private _timeId?: NodeJS.Timeout;

    constructor(props: Props, context: any) {
        super(props, context);
        this._name = props.name;
        this.state = {time: new Date()};
    }

    componentDidMount(): void {
        this._timeId = setInterval(() => this._update(), 1000);
        console.log('component amount');
    }

    componentWillUnmount(): void {
        if (this._timeId instanceof NodeJS.Timeout) {
            clearInterval(this._timeId)
        }
        console.log('component unmount');
    }

    private _update() {
        this._setTime();
    }

    private _setTime() {
        this.setState({time: new Date()});
    }

    render(): any {
        return <b>
            {this._name}, state is: time={this.state.time.toLocaleTimeString()}
            <StatePlusComponent/>
        </b>;
    }
}

interface SuperState {
    month: number
    cunt: number
}

class StatePlusComponent extends React.PureComponent<any, SuperState> {

    private _timeId?: NodeJS.Timeout;

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            month: 3,
            cunt: 3
        };
    }

    componentDidMount(): void {
        this._timeId = setInterval(() => {
            this.setState((state: SuperState, props: any) => (
                {
                    cunt: (state.cunt) + (state.month),
                    month: state.month + 1
                }
            ));
        }, 1000);
    }

    componentWillUnmount(): void {
        if (this._timeId instanceof NodeJS.Timeout) {
            clearInterval(this._timeId);
        }
    }

    render(): any {
        return <p>Set state by pre state, Month {this.state.month}, the rabbits number is: {this.state.cunt}</p>;
    }
}

export default StateComponent
export {StatePlusComponent}