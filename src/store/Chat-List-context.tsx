import React, {useEffect, useReducer} from 'react';
import {avatarsObservable, chatsObservable} from "../services/Chat-service";
import {forkJoin, Subscription} from "rxjs";

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
/////////////////////////
interface IModifiedMessage extends IMessage {
    authorUrl: string
}

interface IModifiedChat {
    [key: string] : {
        id: string,
        title: string,
        message: IModifiedMessage,
        state: string,
        participants: []
        selected: boolean
    }
}
interface ChatListContextInterface {
    chats: IModifiedChat,
    filterChat: (filter: {query: string}) => void
}
type ActionPayload = {
    data? : IModifiedChat,
    filter?: {query: string}
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
let chatListInitialState: IModifiedChat = {}

export const ChatListContextProvider: React.FC<ChatListContextProviderProps> = ({children}) => {

    useEffect(() => {
        const subscription: Subscription = forkJoin([chatsObservable, avatarsObservable])
            .subscribe(
                (data: [IChat[], {[key: string]: string}]) => {
                    chatListInitialState = chatListMapper(data[0], data[1])
                    chatListActionDispatcher({type: 'update-chat-list', payload: {data: chatListInitialState}})
                })
        return () => subscription.unsubscribe()
    }, [])

    const chatListReducer = (state: typeof chatListInitialState, action: ACTION_TYPE): IModifiedChat  => {
        const {type, payload} = action;
        if (type==='update-chat-list') {
            return {
                ...state,
                ...payload.data
            }
        } else if (type === 'filter-chat-list') {
            // filter chat list based on filter criteria
            let filteredChatList: IModifiedChat = {}
            Object.values(chatListInitialState).forEach(chat => {
                if (payload.filter?.query.toUpperCase() === 'ALL') filteredChatList = chatListInitialState
                if (chat.state.toUpperCase() === payload.filter?.query.toUpperCase()) {
                    filteredChatList[chat.id] = chat
                }
            })
            return filteredChatList
        }
        return state
    }

    const [chatList, chatListActionDispatcher] = useReducer(chatListReducer, chatListInitialState);

    const filterChat = (filter:{query: string}) => chatListActionDispatcher({type: 'filter-chat-list', payload: {filter: filter}})

    const chatListMapper = (chats: IChat[], avatars: {[key: number]: string}) : IModifiedChat => {
        const chatMapperObj: IModifiedChat = {}
        chats.forEach((chat) => {
            chatMapperObj[chat.id] = {
                id: chat.id,
                title: chat.title,
                message: {...chat.message, authorUrl: avatars[+chat.message.authorId]},
                state: chat.archived ? 'archived' : 'active',
                selected: false,
                participants: chat.participants
            }
        })
        return chatMapperObj
    }

    return <ChatListContext.Provider value={{
        chats: chatList,
        filterChat,
    }}>{children}
    </ChatListContext.Provider>
}

export default ChatListContext
