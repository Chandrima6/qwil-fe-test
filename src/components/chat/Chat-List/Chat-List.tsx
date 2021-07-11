import React, {useContext, useEffect, MouseEvent} from "react";
import ChatActions from "../Chat-Actions/Chat-Actions";
import {StyledListItem, StyledList } from "../../../UI/List";
import Card from "../../../UI/Card";
import ChatListContext from "../../../store/Chat-List-context";
import styles from './Chat-List.module.css'
import {computeDate} from "../../../utils/date-formatter";

const ChatList = () => {
    const {chats, filterChat, updateChat} = useContext(ChatListContext)
    const chatsValues = Object.values(chats);

    useEffect(() => {
        filterChat({query: 'all'})
    }, [])

    const chatActionHandler = (action: {type: 'filter' | 'add', payload: string}) => {
        if (action.type === 'filter') {
            chatResetFocus()
            filterChat({query: action.payload})
        }
    }

    const chatSelectHandler = (event: MouseEvent<HTMLLIElement>) => {
        chatResetFocus()
        chats[event.currentTarget.id].selected = true;
        updateChat(chats)
    }

    const chatResetFocus = () => {
        chatsValues.forEach(chat => chat.selected = false)
        updateChat(chats)
    }

    return <Card width="30%">
        <ChatActions onAction={chatActionHandler}></ChatActions>
        <StyledList>
            {chatsValues.length ?
                chatsValues.map(chat => {
                    return <StyledListItem id={chat.id}
                                           key={chat.id}
                                           onClick={chatSelectHandler}
                                           className={chat.selected ? 'active': ''}>
                        <div className={styles['chat-content']} >
                            <img src={chat.message.authorUrl} alt="author"/>
                            <div className={styles['chat-details']}>
                                <h2>{chat.title}</h2>
                                <p>{chat.message.authorName}</p>
                                <p>{chat.message.content}</p>
                            </div>
                        </div>
                        <p>{computeDate(chat.message.timestamp)}</p>
                    </StyledListItem>
                }) :
                <StyledListItem>
                    <h3 className={styles['warn']}>Start your first chat with Qwil !!!!</h3>
                </StyledListItem>
            }
        </StyledList>
    </Card>
}

export default ChatList
