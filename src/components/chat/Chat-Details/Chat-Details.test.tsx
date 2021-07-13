import {render, screen} from "@testing-library/react";
import ChatListContext from "../../../store/Chat-List-context";
import {chatListContextValMockWithSelected} from "../../../assets/dummy-test-data";
import ChatDetails from "./Chat-Details";

describe('Chat Details component', () => {
    beforeEach(() => {
        render(
            <ChatListContext.Provider value={chatListContextValMockWithSelected}>
                <ChatDetails data-testid="chat-details"/>
            </ChatListContext.Provider>
        )
    })

    test('renders only the selected chat\'s title',() => {
        const chatHeader = screen.getByTestId('chat-details')
        expect(chatHeader.textContent).toBe('Invoice - 18633')
    })


    test('does not render the chat\'s title which is not selected',() => {
        const chatHeader = screen.getByTestId('chat-details')
        expect(chatHeader.textContent).not.toBe('Investment Strategy')
    })
})
