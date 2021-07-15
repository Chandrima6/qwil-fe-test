import React, {useEffect, useReducer} from 'react';
import {avatarsObservable, chatsObservable} from "../services/Chat-service";
import {forkJoin, Observable, Subscription} from "rxjs";
import {chatListMapper, IChat, IModifiedChat} from "../models/chat.model";
import {
    CHAT_ACTION_TYPE,
    ChatListContextInterface,
    ChatListContextProviderProps
} from "../models/chat-list-context.model";
import {IModifiedAvatar} from "../models/avatar.model";

const ChatListContext = React.createContext<ChatListContextInterface>({
    chats: {},
    filterChat: () => {},
    updateChat: () => {}
});
let chatListInitialState: IModifiedChat = {}

export const ChatListContextProvider: React.FC<ChatListContextProviderProps> = ({children}) => {

    useEffect(() => {
        const chatAvatarResponse: Observable<[IChat[], IModifiedAvatar]> = forkJoin([chatsObservable, avatarsObservable])
        const subscription: Subscription = chatAvatarResponse
            .subscribe(
                (data: [IChat[], IModifiedAvatar]) => {
                    // TODO: handle fork join error scenario in a better way
                    if (data[0].length && data[1]) {
                        chatListInitialState = chatListMapper(data[0], data[1])
                    }
                    chatListActionDispatcher({type: 'update-chat-list', payload: {data: chatListInitialState}})
                })
        return () => subscription.unsubscribe()
    },[])

    const chatListReducer = (state: typeof chatListInitialState, action: CHAT_ACTION_TYPE): IModifiedChat  => {
        const {type, payload} = action;
        if (type==='update-chat-list') {
            return {
                ...state,
                ...payload.data
            }
        } else if (type === 'filter-chat-list') {
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
    const updateChat = (chats: IModifiedChat) => chatListActionDispatcher({type: 'update-chat-list', payload: {data: chats}})

    return <ChatListContext.Provider value={{
        chats: chatList,
        filterChat,
        updateChat
    }}>{children}
    </ChatListContext.Provider>
}

export default ChatListContext
