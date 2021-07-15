import Card from '../../../UI/Card'
import ChatList from "../Chat-List/Chat-List";
import ChatDetails from "../Chat-Details/Chat-Details";
import Nav from "../../shared/Nav";
import React, {useState, Fragment} from "react";
import {ChatListContextProvider} from "../../../store/Chat-List-context";
import src from '../../../assets/qwill-messenger-logo.png'
import styles from './Chat-Container.module.css'

const ChatContainer = () => {
    const [showList, setShowList] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const clickNavItemHandler = (navItemName: string) => {
        if (navItemName === 'toggle-chat-list') {
            setShowList((prevState) => !prevState)
        }
    }

    const showChatDetails = () => setShowDetails(true)

    // TODO: In future would like the app to have the Router implemented


    return <Fragment>
        <header className={styles['header-container']}>
            <h3 className={styles['header-logo']}>
                <img src={src} alt="company-logo-name" />
            </h3>
            <Nav onClickNavItem={clickNavItemHandler} data-testid="navigation"/>
        </header>
        {
            (showList || showDetails) &&
            <main className={styles.main}>
                <ChatListContextProvider>
                    {showList && <ChatList showChatDetails={showChatDetails}/>}
                    {showDetails && <ChatDetails data-testid="chat-details"/>}
                </ChatListContextProvider>
            </main>
        }
    </Fragment>
}

export default ChatContainer
