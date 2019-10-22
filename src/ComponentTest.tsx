import React from 'react'

class Welcome extends React.Component {

    render() {
        let lam:string = ", Welcome to react component.";
        return <h1>{'Hello'}{lam}</h1>;
    }
}

interface Name {
    firstName: string,
    lastName: string
}

function TestPropsComponent(name:Name){
    return <p><b>Your name is: {name.firstName}.{name.lastName}</b></p>
}
export {Welcome}
export default TestPropsComponent