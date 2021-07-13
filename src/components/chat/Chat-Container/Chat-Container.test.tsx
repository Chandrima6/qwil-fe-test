import ChatContainer from "./Chat-Container";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Chat Container component', () => {
    beforeEach(() => {
        render(<ChatContainer />)
    })

    test('renders toggle button', () => {
        const toggleButton = screen.getByTestId('navigation')
        expect(toggleButton).toBeInTheDocument()
    })

    test('when rendered, toggle button clicked, should show chat list',() => {
        const toggleButton = screen.getByTestId('navigation')
        userEvent.click(toggleButton)
        const filterDropdown = screen.getByTestId('dropdown-filter')
        expect(filterDropdown).toBeInTheDocument()
        userEvent.click(toggleButton)
        expect(filterDropdown).not.toBeInTheDocument()
    })
    test('when already rendered chat list, toggle button clicked, should hide chat list',() => {
        const toggleButton = screen.getByTestId('navigation')
        userEvent.click(toggleButton)
        const filterDropdown = screen.getByTestId('dropdown-filter')
        userEvent.click(toggleButton)
        expect(filterDropdown).not.toBeInTheDocument()
    })

})
