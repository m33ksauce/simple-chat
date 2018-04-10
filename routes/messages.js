var express = require('express');
var router = express.Router();

Message = function(user, messageBody) {
    this.user = user;
    this.messageBody = messageBody;
}

MessageList = function() {
    var messages = new Array();

    addMessage = function(msg) {
        messages.push(msg);
    };

    getNewMessages = function(lastOrder) {
        var newMessages = new Array();
        for (i = lastOrder; i < messages.length; i++) {
            newMessages.push(messages[i]);
        }
        return {
            "countNewMessages": newMessages.length,
            "newMessages": newMessages,
            "newOrder": messages.length
        };
    };

    getAllMessages = function() {
        return { "messages": messages };
    }

    return {
        addMessage,
        getNewMessages, 
        getAllMessages
    }
}

messages = MessageList();

router.get('/', function(req, res, next) {
  res.send(JSON.stringify(messages.getAllMessages()));
});

router.get('/getFromOrder/:order', function(req, res, next) {
    res.send(JSON.stringify(messages.getNewMessages(req.params["order"])));
});

router.post('/newMessage', function(req, res) {
    messages.addMessage(new Message(req.body.msg.user, req.body.msg.messageBody))
    res.sendStatus(200);
});

module.exports = router;
