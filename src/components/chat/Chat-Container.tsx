import Card from './../../UI/Card'
import ChatList from "./Chat-List";
import ChatDetails from "./Chat-Details";
import Nav from "../Nav";
import React from "react";

const ChatContainer = () => {
    return <Card width="auto" direction="row">
        <Nav></Nav>
        <ChatList></ChatList>
        <ChatDetails></ChatDetails>
    </Card>
}

export default ChatContainer

// initially nav and chatlist will be there
// when no chat selected, chatdetails will show a warning "no chat selected"
