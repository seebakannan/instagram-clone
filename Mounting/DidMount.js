import React from 'react';
import Derived from "./Derived.js";

class Mount extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: "red"
        }
    }

    //changing the state value at different intervals! 
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: "Sky Blue!!"
            })
        }, 2000)
    }
    render() {
        return (
            <div>
                <p>My favourite color is {this.state.color}</p>
                <Derived favbike="HONDA" />
            </div>
        )
    }


}
export default Mount;
