export default class CreateBoard {
    get hoverOver() { return cy.get(".vs-c-list__btn").eq(1) }
    get addBoard() { return cy.get("span").contains('Add Board') }
    get selectOrg() { return cy.get('.el-select-dropdown').contains("test1") }
    get titleBoard() { return cy.get('input').eq(1) }
    get nextBtn() { return cy.get('button').contains('Next') }
    get radioBtn() { return cy.get('.vs-c-radio') }
    get finishBtn() { return cy.get('button').contains('Finish') }
    get checkBoardName() { return cy.get('span').should('contain', 'test1') }
    get checkBoardTitle() { return cy.get('.vs-c-list__btn').should('contain', Cypress.env('titleBoard')) }

    createNewBoard() {
        let titleBoard = Cypress.env("titleBoard")
        createBoard.hoverOver.click({ force: true })
        createBoard.addBoard.click()
        this.titleBoard.type(titleBoard);
        createBoard.selectOrg.click({ force: true })
        createBoard.nextBtn.click();
        createBoard.radioBtn.first().click();
        createBoard.nextBtn.click();
        createBoard.nextBtn.click();
        createBoard.nextBtn.click();
        createBoard.finishBtn.click();

    }
}

export const createBoard = new CreateBoard();