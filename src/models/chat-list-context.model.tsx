import {IModifiedChat} from "./chat.model";
import React from "react";

export interface ChatListContextInterface {
    chats: IModifiedChat,
    filterChat: (filter: {query: string}) => void
    updateChat: (chats: IModifiedChat) => void
}
export type chatActionPayload = {
    data? : IModifiedChat,
    filter?: {query: string}
}
export type CHAT_ACTION_TYPE =
    | { type: "update-chat-list"; payload: chatActionPayload }
    | { type: "filter-chat-list"; payload: chatActionPayload };
export type ChatListContextProviderProps = {
    children: React.ReactNode
}
