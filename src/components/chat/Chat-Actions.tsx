import React, {MouseEvent} from "react";
import {CHAT_TYPE} from "../../constants/chat-type";
import Dropdown from "../../UI/Dropdown";
import Button from "../../UI/Button";
import styles from "./Chat-Actions.module.css"

const ChatActions = () => {
    const chatState = CHAT_TYPE[0].value;
    const selectChatTypeListener = (value: string) => {
        console.log(value);
    }
    const startNewChatHandler = (event: MouseEvent<HTMLButtonElement>) => {}

    return <div className={styles['chat-actions']}>
        <Dropdown id="chat-state" value={chatState} onChange={selectChatTypeListener} options={CHAT_TYPE}></Dropdown>
        <Button type="button" name="new-chat" clickHandler={startNewChatHandler}>New Chat</Button>
    </div>
}

export default ChatActions
