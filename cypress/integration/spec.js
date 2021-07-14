import ChatPageObjects from '../support/page-object/chat'

describe('Qwil Chat application', () => {
  it('should show toggle icon', function () {
    cy.visit('http://localhost:3000')
    ChatPageObjects.toggleButton.should('be.visible')
  })

  describe('when clicked on toggle icon, open chat list, when clicked on a chat, open chat details', () => {
    before(() => {
      cy.visit('http://localhost:3000')
    })

    it('should open chat list when clicked on toggle icon', () => {
      ChatPageObjects.toggleButton.click()
      ChatPageObjects.list.should('be.visible')
    })

    it('new chat button should be disabled', () => {
      ChatPageObjects.newChat.should('be.disabled')
    })

    it('when chat list opened, a chat item should have a header', () => {
      ChatPageObjects.listItemHeader.should('be.visible')
    })

    it('should open chat details with chat header, when clicked on a chat item', () => {
      let headerText = '';
      ChatPageObjects.listItemHeader.then($title => {
        headerText = $title.text()
      })
      ChatPageObjects.listItem.click()
      ChatPageObjects.listItemDetailsHeader.should('be.visible')
      ChatPageObjects.listItemDetailsHeader.should('have.value', headerText)
    })
  })

  describe('when chat list rendered, clicked on dropdown filter, select "Active", should re-render chat list', () => {
    before(() => {
      cy.visit('http://localhost:3000')
      ChatPageObjects.toggleButton.click()
    })

    it('when selected "active" in dropdown filter, chat-list should be re-rendered', () => {
      ChatPageObjects.filterDropdown.select('Active').should('have.value', 'Active')
      ChatPageObjects.list.should('be.visible')
    })
  })

  describe('when selected "Archived", chat list re-rendered, clicked on a chat item, clicked on toggle button, should show chat details matching the title', () => {
    before(() => {
      cy.visit('http://localhost:3000')
      ChatPageObjects.toggleButton.click()
    })

    it('clicked on toggle button should hide the chat list but chat details should be opened with title matching', () => {
      let headerText = '';
      ChatPageObjects.listItemHeader.then($title => {
        headerText = $title.text()
      })
      ChatPageObjects.listItem.click().then(() => {
        ChatPageObjects.toggleButton.click()
        ChatPageObjects.filterDropdown.should('not.exist')
        ChatPageObjects.listItemDetailsHeader.should('be.visible')
      })
    })
  })

})
