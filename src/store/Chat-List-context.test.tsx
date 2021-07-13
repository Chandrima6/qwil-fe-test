import {render, screen} from "@testing-library/react";
import {ChatListContextProvider} from "./Chat-List-context";
import {of} from "rxjs";
import {IChat} from "../models/chat.model";
import {IModifiedAvatar} from "../models/avatar.model";

const chatsMock: IChat[] = [{
    "id": "3",
    "title": "Follow up",
    "message": {
        "authorName": "Barry Edwards",
        "authorId": "3",
        "content": "Thanks. I'll call you",
        "timestamp": 1620131688345
    },
    "archived": false,
    "participants": []
}]

const avatarsMock: IModifiedAvatar = {
    "3": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
}

const mockedRXJS = jest.doMock('rxjs', () => {
    return {
        'forkJoin': jest.fn().mockImplementation(() => [
            of(chatsMock),
            of(avatarsMock)
        ]),
        'Observable': {
            'subscribe': jest.fn().mockImplementation(() => {
                return [chatsMock, avatarsMock]
            })
        }
    }

})

describe('Chat List Context', () => {
    beforeEach(() => {
        render(<ChatListContextProvider>

        </ChatListContextProvider>)

    })
    test('', () => {
    })
});
