import {ChatListContextInterface} from "../models/chat-list-context.model";
import {IModifiedChat} from "../models/chat.model";

export const chatListContextValMock: ChatListContextInterface = {
    chats: {
        "1": {
            "id": "1",
            "title": "Invoice - 18633",
            "message": {
                "authorName": "Carrie Edwards",
                "authorId": "2",
                "authorUrl": "",
                "content": "Just checking it over now.",
                "timestamp": 1620155003723
            },
            "state": "archived",
            "participants": [],
            "selected": false
        },
        "2": {
            "id": "2",
            "title": "Investment Strategy",
            "message": {
                "authorName": "Barry Edwards",
                "authorId": "3",
                "authorUrl": "",
                "content": "Thanks. I'll call you",
                "timestamp": 1620155003723
            },
            "state": "active",
            "participants": [],
            "selected": false
        }
    },
    filterChat: jest.fn(),
    updateChat: jest.fn()
}

export const emptyChatListContextValMock: ChatListContextInterface = {
    chats: {},
    filterChat: jest.fn(),
    updateChat: jest.fn()
}
