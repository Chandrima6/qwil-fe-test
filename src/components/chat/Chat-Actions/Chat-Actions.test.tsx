import {render, screen} from "@testing-library/react";
import ChatActions from "./Chat-Actions";
import userEvent from "@testing-library/user-event";

describe('Chat Actions component', () => {
    const actionMockHandler = jest.fn()
    beforeEach(() => {
        render(<ChatActions onAction={actionMockHandler} data-testid="filter-chat"/>)
    })

    test('renders a disabled new chat button', () => {
        const addChat = screen.getByTestId('add-chat')
        expect(addChat).toBeDisabled()
    })

})
