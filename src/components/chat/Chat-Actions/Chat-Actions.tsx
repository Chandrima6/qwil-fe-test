import React, {MouseEvent} from "react";
import {CHAT_TYPE} from "../../../constants/constants";
import Dropdown from "../../../UI/Dropdown";
import {IconButton} from "../../../UI/Button";
import styles from "./Chat-Actions.module.css"
import {IoCreateOutline} from "react-icons/io5";

type ChatActionProps = {
    onAction: (action: {type: 'filter' | 'add', payload: string}) => void
    'data-testid': string
}

const ChatActions: React.FC<ChatActionProps> = (props) => {
    const chatState = CHAT_TYPE[0].value;
    const selectChatTypeListener = (value: string) => {
        props.onAction({type: 'filter', payload: value})
    }
    const startNewChatHandler = (event: MouseEvent<HTMLButtonElement>) => {}

    return <div className={styles['chat-actions']}>
        <Dropdown
            id="chat-state"
            value={chatState}
            onChange={selectChatTypeListener}
            options={CHAT_TYPE}
            data-testid={props['data-testid']}
            >
        </Dropdown>
        <IconButton type="button" name="new-chat" clickHandler={startNewChatHandler} data-testid="add-chat" disabled><IoCreateOutline /></IconButton>
    </div>
}

export default ChatActions
