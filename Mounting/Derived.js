import React from 'react'
import ReactDOM from 'react-dom'
class Derived extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bike: "DUKE 200"
        }
    }
    //set state by getting props from user
    static getDerivedStateFromProps(props, state) {
        return { bike: props.favbike }
    }
    render() {
        return (
            <div>
                <p>MY favourite bike is {this.state.bike}</p>
            </div>
        )
    }
}
export default Derived;
