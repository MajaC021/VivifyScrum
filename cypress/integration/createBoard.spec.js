import { createBoard } from '../page_objects/createBoardPOM';
import { loginPage } from '../page_objects/loginPOM';

describe("create board test", () => {

  beforeEach("visit board", () => {
  loginPage.visitLoginPage
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    }).as('loginRequest')
    loginPage.loginUser();
    cy.wait('@loginRequest').then((interceptObj) => {
      expect(interceptObj.response.statusCode).eq(200)
      loginPage.checkColorSlideBar
    });
  });

  it.only('create Board', () => {

    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
    }).as('createBoardRequest')
    createBoard.createNewBoard()
    cy.wait('@createBoardRequest').then((interceptObj) => {
      expect(interceptObj.response.statusCode).eq(201)
      expect(interceptObj.response.body.name).eq(Cypress.env('titleBoard'))
    })
    createBoard.checkBoardName
    createBoard.checkBoardTitle

  })
})