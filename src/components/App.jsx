import React, { Component, Fragment } from 'react';

// const Greeting = (props) => (
//     <h1>{ props.message }</h1>
// );

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'React Lab',
            input: 'Type here',
            hasLoaded: false
        };
    }

    componentDidMount() {
        this.setState({
            hasLoaded: true
        });
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleClick = () => {
        this.setState({
            hasLoaded: !this.state.hasLoaded
        });
    }

    render() {
        if (this.state.hasLoaded) {
            return (
                <Fragment>
                    <h1>{this.props.message} {this.state.text}</h1>
                    <input
                        type="text"
                        placeholder={this.state.input} 
                        onChange={this.handleInput} 
                    />
                    <button onClick={this.handleClick}>Click Me</button>
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    <h1>Loading...</h1>
                    <button onClick={this.handleClick}>Click Me</button>
                </Fragment>
            )
        }
    }
}

export default Greeting;