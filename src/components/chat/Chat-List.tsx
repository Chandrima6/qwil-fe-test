import React from "react";
import ChatActions from "./Chat-Actions";
import {StyledList} from "../../UI/List";
import Card from "../../UI/Card";
const ChatList = () => {
    return <Card width="30%">
        <ChatActions></ChatActions>
        <StyledList></StyledList>
    </Card>
}

export default ChatList
