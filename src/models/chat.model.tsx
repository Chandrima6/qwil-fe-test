import {IMessage, IModifiedMessage} from "./message.model";
import {IModifiedAvatar} from "./avatar.model";

// TODO: IChat could have been a class and IModifiedChat could have been returned using a method in that class
export interface IChat {
    id: string,
    title: string,
    message: IMessage,
    archived: boolean,
    participants: []
}
export interface IModifiedChat {
    [key: string] : {
        id: string,
        title: string,
        message: IModifiedMessage,
        state: string,
        participants: []
        selected: boolean
    }
}

export const chatListMapper = (chats: IChat[], avatars: IModifiedAvatar) : IModifiedChat => {
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


