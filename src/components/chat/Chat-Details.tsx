import Card from "../../UI/Card";
import {useContext, useEffect, useState} from "react";
import ChatListContext from "../../store/Chat-List-context";
import {IModifiedChat} from "../../models/chat.model";

type ChatDetailsProps = {
    'data-testid': string
}

const ChatDetails: React.FC<ChatDetailsProps> = (props) => {
    const {chats} = useContext(ChatListContext)
    const chatsValues = Object.values(chats)
    const [chat, setChat] = useState<IModifiedChat>({})
    const filteredChat: IModifiedChat = {};
    useEffect(() => {
        chatsValues.forEach(chat => {
            if(chat.selected) {
                filteredChat[chat.id] = chat
                setChat(filteredChat)
            }
        })

    }, [chats])

    return <Card width="30%">
        <h3 data-testid={props['data-testid']}>{Object.values(chat)[0]?.title}</h3>
    </Card>
}

export default ChatDetails
