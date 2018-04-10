import React, { Component } from 'react';

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = { user: '', messageBody: '' };
        this.api = props.api;

        this.handleMessageBodyChange = this.handleMessageBodyChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMessageBodyChange(event) {
        this.setState({ user: this.state.user,
                        messageBody: event.target.value });
    }

    handleUserChange(event) {
        this.setState({ user: event.target.value,
                        messageBody: this.state.messageBody });
    }

    handleSubmit(event) {
        this.sendMessage(this.state.user, this.state.messageBody)
        this.setState({ user: this.state.user,
                        messageBody: "" });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="user" value={this.state.user} 
                        onChange={this.handleUserChange}/>
                </label>
                <br />
                <label>
                    Message:
                    <input type="text" name="message" value={this.state.messageBody}
                        onChange={this.handleMessageBodyChange}/>
                </label>
                <input type="submit" value="Send!" />
            </form>
        );
    }

    sendMessage(user, messageBody) {
        console.log(user, messageBody)
        fetch(this.api + "/newMessage", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                msg: {
                    user: user,
                    messageBody: messageBody
                }
            })
        });
    }
}

export default InputBox;