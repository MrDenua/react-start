import React from "react";

interface LoginForm {
    userName: string;
    password: string;
    intro: string;
    lang: string;
}

class FormComponent extends React.PureComponent<any, LoginForm> {


    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            userName: '',
            password: '',
            intro: '',
            lang: 'chinese'
        };
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        this.selectLang = this.selectLang.bind(this);
    }

    submit(e: React.FormEvent) {
        e.preventDefault();
        alert('your name ' + this.state.userName);
    }

    change(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault();
        this.setState({userName: e.currentTarget.value.toUpperCase()});
    }

    selectLang(e: React.FocusEvent<HTMLSelectElement>) {
        e.preventDefault();
        this.setState({lang: e.currentTarget.value})
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>UserName: <input type="text" value={this.state.userName} onChange={this.change}/></label><br/>
                <label>Language:
                    <select value={this.state.lang}  onChange={this.selectLang}>
                        <option value="chinese">Chinese</option>
                        <option value="english">English</option>
                        <option value="japanese">Japanese</option>
                    </select>
                </label><br/>
                <input type="file"/>
                <label>Intro: <textarea/></label><br/>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}

export default FormComponent