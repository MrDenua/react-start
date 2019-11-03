import React, {FormEvent} from "react";

interface ShareState {
    value: number
    mode: number
}

class ShareStateAComponent extends React.Component <ShareState, any> {

    render() {
        return <p>{this.props.value} mode {this.props.mode}} = {this.props.value % this.props.mode}</p>
    }
}

class ShareStateBComponent extends React.Component<any, ShareState> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {value: 1, mode: 0};
        this.inputChange = this.inputChange.bind(this);

    }

    inputChange(e: FormEvent<HTMLInputElement>): void {
        this.setState({value: parseInt(e.currentTarget.value)})
        e.preventDefault()
    }

    render() {
        return <fieldset>
            <legend>x % 3:</legend>
            <input
                type="number"
                value={this.state.value}
                onChange={this.inputChange}/>

            <ShareStateAComponent value={this.state.value} mode={3}/>
            <ShareStateAComponent value={this.state.value} mode={2}/>
        </fieldset>;
    }
}


export {ShareStateAComponent, ShareStateBComponent}
export default ShareStateBComponent