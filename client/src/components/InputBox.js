import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="user" />
                </label>
                <br />
                <label>
                    Message:
                    <input type="text" name="message" />
                </label>
                <input type="submit" value="Send!" />
            </form>
        );
    }

    sendMessage() {
        //
    }
}

export default InputBox;