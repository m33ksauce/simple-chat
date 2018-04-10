import React, { Component } from 'react';
import ChatBox from './ChatBox.js';
import InputBox from './InputBox.js';

class MessageWindow extends Component {
    constructor(props) {
        super(props);
        
        this.api = props.api;
    }

    render() {
        return(
            <div>
                <ChatBox api={this.api} />
                <br />
                <InputBox api={this.api} />
            </div>
        );
    }
}

export default MessageWindow;