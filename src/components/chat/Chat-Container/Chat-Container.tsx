import Card from '../../../UI/Card'
import ChatList from "../Chat-List/Chat-List";
import ChatDetails from "../Chat-Details";
import Nav from "../../shared/Nav";
import React, {useState} from "react";
import {ChatListContextProvider} from "../../../store/Chat-List-context";

const ChatContainer = () => {
    const [showList, setShowList] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const clickNavItemHandler = (navItemName: string) => {
        if (navItemName === 'toggle-chat-list') {
            setShowList((prevState) => !prevState)
        }
    }

    const showChatDetails = () => setShowDetails(true)

    return <Card width="auto" direction="row">
        <Nav onClickNavItem={clickNavItemHandler} data-testid="navigation"/>
        <ChatListContextProvider>
            {showList && <ChatList showChatDetails={showChatDetails}/>}
            {showDetails && <ChatDetails data-testid="chat-details"/>}
        </ChatListContextProvider>
    </Card>
}

export default ChatContainer
