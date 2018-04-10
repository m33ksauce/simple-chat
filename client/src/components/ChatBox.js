import React, { Component } from 'react';

class Chatbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            msgs: [],
            order: 0
        };

        this.api = props.api;
    }

    componentDidMount() {
        this.getAllMessages();

        this.refreshTimer = setInterval(
            () => this.refreshMessages(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.refreshTimer);
    }

    refreshMessages() {
        /*msgs = this.state.msgs;
        newMsgs = 
        msgs.concat(newMsgs);
        this.setState(this.state.msgs = msgs);*/
        this.getAllMessages();
    }

    render() {
        const { error, isLoaded, msgs } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            this.id = 0;
            return (
                <span>
                    {msgs.map(msg => (
                        <span key={this.id++}><b>{msg["user"]}:</b> <i>{msg["messageBody"]}</i><br /></span>
                    ))}
                </span>
            );
        }
    }

    getAllMessages(order) {
        fetch(this.api)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        msgs: result["messages"]
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
}

export default Chatbox;