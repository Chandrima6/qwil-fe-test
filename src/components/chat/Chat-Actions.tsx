import React, {MouseEvent} from "react";
import {CHAT_TYPE} from "../../constants/constants";
import Dropdown from "../../UI/Dropdown";
import Button from "../../UI/Button";
import styles from "./Chat-Actions.module.css"

type ChatActionProps = {
    onAction: (action: {type: 'filter' | 'add', payload: string}) => void
}

const ChatActions: React.FC<ChatActionProps> = (props) => {
    const chatState = CHAT_TYPE[0].value;
    const selectChatTypeListener = (value: string) => {
        console.log(value);
        props.onAction({type: 'filter', payload: value})
    }
    const startNewChatHandler = (event: MouseEvent<HTMLButtonElement>) => {}

    return <div className={styles['chat-actions']}>
        <Dropdown id="chat-state" value={chatState} onChange={selectChatTypeListener} options={CHAT_TYPE}></Dropdown>
        <Button type="button" name="new-chat" clickHandler={startNewChatHandler} disabled>New Chat</Button>
    </div>
}

export default ChatActions
