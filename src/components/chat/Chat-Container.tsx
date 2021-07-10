import Card from './../../UI/Card'
import ChatList from "./Chat-List";
import ChatDetails from "./Chat-Details";
import Nav from "../Nav";
import React, {useState} from "react";
import {ChatListContextProvider} from "../../store/Chat-List-context";

const ChatContainer = () => {
    const [showList, setShowList] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const clickNavItemHandler = (navItemName: string) => {
        if (navItemName === 'toggle-chat-list') {
            setShowList((prevState) => !prevState)
        }
    }
    return <Card width="auto" direction="row">
        <Nav onClickNavItem={clickNavItemHandler}/>
        <ChatListContextProvider>
            {showList && <ChatList />}
            {showDetails && <ChatDetails />}
        </ChatListContextProvider>
    </Card>
}

export default ChatContainer

// initially nav and chatlist will be there
// when no chat selected, chatdetails will show a warning "no chat selected"
