
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatList from "./Chat-List";
import ChatListContext from "../../../store/Chat-List-context";
import {chatListContextValMock, emptyChatListContextValMock} from "../../../assets/dummy-test-data";
import {IModifiedChat} from "../../../models/chat.model";

describe('Chat List component', () => {
    beforeEach(() => {
        const showChatDetailsMock = jest.fn()
        render(
            <ChatListContext.Provider value={chatListContextValMock}>
                <ChatList showChatDetails={showChatDetailsMock}/>
            </ChatListContext.Provider>
        )
    })
    test('renders correct quantity of the elements on load', () => {
        const chatRows = screen.queryAllByTestId("list-item");
        expect(chatRows.length).toEqual(2)
    })

    test('renders only active chats by using the filter', () => {
        const dropdown = screen.getByTestId('dropdown-filter')
        userEvent.selectOptions(dropdown, 'Active')

        expect(chatListContextValMock.filterChat).toHaveBeenCalledWith({query: 'Active'})
    })

    test('renders only archived chats by using the filter', () => {
        const dropdown = screen.getByTestId('dropdown-filter')
        userEvent.selectOptions(dropdown, 'Archived')

        expect(chatListContextValMock.filterChat).toHaveBeenCalledWith({query: 'Archived'})
    })

    test('renders only all chats by using the filter', () => {
        const dropdown = screen.getByTestId('dropdown-filter')
        userEvent.selectOptions(dropdown, 'All')

        expect(chatListContextValMock.filterChat).toHaveBeenCalledWith({query: 'All'})
    })
})
describe('Chat list component', () => {
    beforeEach(() => {
        const showChatDetailsMock = jest.fn()
        render(
            <ChatListContext.Provider value={chatListContextValMock}>
                <ChatList showChatDetails={showChatDetailsMock}/>
            </ChatListContext.Provider>
        )
        const dropdown = screen.getByTestId('dropdown-filter')
        userEvent.selectOptions(dropdown, 'Active')
    })


    Object.values(chatListContextValMock.chats).forEach(chat => {
        test('renders only active chats by using the filter and lose previous focus', () => {
            expect(chat.selected).toBe(false)
        })
    })
})
describe('Chat list component', () => {
    beforeEach(() => {
        const showChatDetailsMock = jest.fn()
        render(
            <ChatListContext.Provider value={emptyChatListContextValMock}>
                <ChatList showChatDetails={showChatDetailsMock}/>
            </ChatListContext.Provider>
        )
    })
    test('renders "Start your first chat with Qwil" text', () => {
        const warningText = screen.getByText('Start your first chat with Qwil', {exact: false});

        expect(warningText).toBeInTheDocument()
    })
})

describe('Chat list component', () => {
    beforeEach(() => {
        const showChatDetailsMock = jest.fn()
        render(
            <ChatListContext.Provider value={chatListContextValMock}>
                <ChatList showChatDetails={showChatDetailsMock}/>
            </ChatListContext.Provider>
        )
    })
    test('', () => {
        const chatRows = screen.queryAllByTestId("list-item");
        userEvent.click(chatRows[0])
        expect(chatListContextValMock.chats[chatRows[0].id].selected).toEqual(true)
    })
})
