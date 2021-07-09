import React, {Fragment} from "react";
import {CHAT_TYPE} from "../../constants/chat-type";
import Dropdown from "../../UI/Dropdown";

const ChatActions = () => {
    const chatState = CHAT_TYPE[0].value;
    const selectChatStateListener = (value: string) => {
        console.log(value);
    }
    return <Fragment>
        <Dropdown id="chat-state" label="select chat state" value={chatState} onChange={selectChatStateListener} options={CHAT_TYPE}></Dropdown>
    </Fragment>
}

export default ChatActions
