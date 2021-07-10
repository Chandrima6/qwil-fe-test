import React, {useContext} from "react";
import ChatActions from "./Chat-Actions";
import {StyledList} from "../../UI/List";
import Card from "../../UI/Card";
import ChatListContext from "../../store/Chat-List-context";
const ChatList = () => {
    const {chats, filterChat} = useContext(ChatListContext)
    console.log(chats)
    return <Card width="30%">
        <ChatActions></ChatActions>
        <StyledList></StyledList>
    </Card>
}

export default ChatList
