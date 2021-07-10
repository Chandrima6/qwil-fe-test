import React, {useEffect, useReducer} from 'react';

interface IMessage {
    authorName: string,
    authorId: string,
    content: string,
    timestamp: number
}
/////////////////////////
// only used as type check for the returned response in HTTP call
// TODO: IChat could have been a class and IModifiedChat could have been returned using a method in that class
interface IChat {
    id: string,
    title: string,
    message: IMessage,
    archived: boolean,
    participants: []
}
interface IAvatar {
    id: string,
    url: URL
}
/////////////////////////
interface IParticipant {
    id: string,
    name: string,
    url: URL
}
interface IModifiedChat {
    [key: string] : {
        id: string,
        title: string,
        message: IMessage,
        archived: boolean,
        participants: IParticipant
        selected: boolean
    }
}
interface ChatListContextInterface {
    chats: IModifiedChat,
    filterChat: (filter: {query: string}) => void
}
type ActionPayload = {
    data? : IModifiedChat,
    filter?: {}
}
type ACTION_TYPE =
    | { type: "update-chat-list"; payload: ActionPayload }
    | { type: "filter-chat-list"; payload: ActionPayload };
type ChatListContextProviderProps = {
    children: React.ReactNode
}


const ChatListContext = React.createContext<ChatListContextInterface>({
    chats: {},
    filterChat: () => {},
});
const chatListInitialState: IModifiedChat = {}

export const ChatListContextProvider: React.FC<ChatListContextProviderProps> = ({children}) => {
    const chatListReducer = (state: typeof chatListInitialState, action: ACTION_TYPE): IModifiedChat  => {
        const {type, payload} = action;
        if (type==='update-chat-list') {
            return {
                ...state,
                ...payload.data
            }
        } else if (type === 'filter-chat-list') {
            // filter chat list based on filter criteria
            console.log(payload.filter)
            return {
                ...state
            }
        }
        return state
    }

    const [chatList, chatListActionDispatcher] = useReducer(chatListReducer, chatListInitialState);

    useEffect(() => {
        // http call to retrieve chats and avatar
        // use rxjs observable, subscribe and switch-map
        // modifyChatList(db.chats, db.avatars)
        chatListActionDispatcher({type: 'update-chat-list', payload: {data: {}}})
    }, [])

    const filterChat = (filter:{query: string}) => chatListActionDispatcher({type: 'filter-chat-list', payload: {filter: filter}})

    // TODO: add returned type of the function as IModifiedChat[]
    const modifyChatList = (chats: IChat[], avatars: IAvatar[]) => {
        // convert chats array to hashmap
        // include avatars
        // include selected field for each chat
        return {}
    }

    return <ChatListContext.Provider value={{
        chats: chatList,
        filterChat,
    }}>{children}
    </ChatListContext.Provider>
}

export default ChatListContext
