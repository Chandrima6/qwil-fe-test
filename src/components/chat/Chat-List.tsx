import React, {useContext, useEffect} from "react";
import ChatActions from "./Chat-Actions";
import {StyledList, StyledListItem} from "../../UI/List";
import Card from "../../UI/Card";
import ChatListContext from "../../store/Chat-List-context";
const ChatList = () => {
    const {chats, filterChat} = useContext(ChatListContext)
    console.log(chats)

    useEffect(() => {
        filterChat({query: 'all'})
    },[])

    const chatActionHandler = (action: {type: 'filter' | 'add', payload: string}) => {
        if (action.type === 'filter') {
            filterChat({query: action.payload})
        }
    }

    return <Card width="30%">
        <ChatActions onAction={chatActionHandler}></ChatActions>
        <StyledList>
            {Object.values(chats).map(chat => {
                return <StyledListItem key={chat.id}>
                    <img src={chat.message.authorUrl} alt="author"/>
                    <p>{chat.title}</p>
                </StyledListItem>
            }) }
        </StyledList>
    </Card>
}

export default ChatList
