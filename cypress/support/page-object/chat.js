class ChatPageObject {
    get toggleButton() {
        return cy.get('[data-testid="navigation"]')
    }
    get list() {
        return cy.get('[data-testid="list"]')
    }
    get listItem() {
        return cy.get('[data-testid="list-item"]').eq(0)
    }
    get listItemHeader() {
        return cy.get('[data-testid="list-item-title"]').eq(0)
    }
    get filterDropdown() {
        return cy.get('[data-testid="dropdown-filter"]')
    }
    get newChat() {
        return cy.get('[data-testid="add-chat"]')
    }
    get listItemDetailsHeader() {
        return cy.get('[data-testid="chat-details"]')
    }
    get pageUrl(){
        return cy.url()
    }
}
export default new ChatPageObject()
