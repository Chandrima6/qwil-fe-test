import React, {useContext, useEffect} from "react";
import ChatActions from "./Chat-Actions";
import {StyledList, StyledListItem} from "../../UI/List";
import Card from "../../UI/Card";
import ChatListContext from "../../store/Chat-List-context";
import styles from './Chat-List.module.css'


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

    const computeDate = (timestamp: number) => {
        const time = new Date();
        return time.toLocaleString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: '2-digit',
            hour: 'numeric',
            minute: 'numeric',
            formatMatcher: 'best fit',
            hour12: true
        })
    }

    return <Card width="30%">
        <ChatActions onAction={chatActionHandler}></ChatActions>
        <StyledList>
            {Object.values(chats).map(chat => {
                return <StyledListItem key={chat.id}>
                    <div className={styles['chat-content']}>
                        <img src={chat.message.authorUrl} alt="author"/>
                        <div className={styles['chat-details']}>
                            <h2>{chat.title}</h2>
                            <p>{chat.message.authorName}</p>
                            <p>{chat.message.content}</p>
                        </div>
                    </div>
                    <p>{computeDate(chat.message.timestamp)}</p>
                </StyledListItem>
            }) }
        </StyledList>
    </Card>
}

export default ChatList
