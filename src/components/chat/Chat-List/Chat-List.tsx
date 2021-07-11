import React, {useContext, useEffect, MouseEvent} from "react";
import ChatActions from "../Chat-Actions/Chat-Actions";
import {StyledList, StyledListItem} from "../../../UI/List";
import Card from "../../../UI/Card";
import ChatListContext from "../../../store/Chat-List-context";
import styles from './Chat-List.module.css'
import {computeDate} from "../../../utils/date-formatter";

const ChatList = () => {
    const {chats, filterChat} = useContext(ChatListContext)

    useEffect(() => {
        filterChat({query: 'all'})
    }, [])

    const chatActionHandler = (action: {type: 'filter' | 'add', payload: string}) => {
        if (action.type === 'filter') {
            filterChat({query: action.payload})
        }
    }

    const chatRowSelectHandler = (event: MouseEvent<HTMLLIElement>) => {
        console.log(event.currentTarget.value)
        // TODO: use forwardRef and imperativeHandle to focus the list item
    }

    return <Card width="30%">
        <ChatActions onAction={chatActionHandler}></ChatActions>
        <StyledList>
            {Object.values(chats).length ?
                Object.values(chats).map(chat => {
                    return <StyledListItem key={chat.id} onClick={chatRowSelectHandler}>
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
                }) :
                <StyledListItem>
                    <h3 className={styles['warn']}>Start your first chat with Qwil !!!!</h3>
                </StyledListItem>
            }
        </StyledList>
    </Card>
}

export default ChatList
