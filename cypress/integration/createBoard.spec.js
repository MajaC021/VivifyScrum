import { createBoard } from '../page_objects/createBoardPOM';
import { loginPage } from '../page_objects/loginPOM';

describe("create board test", () => {

  beforeEach("visit board", () => {
    cy.visit("/login");
    loginPage.loginUser('test1@gmail.com', 'test123');
    cy.get('.vs-l-sidebar').should('have.css', 'background-color', 'rgb(41, 41, 41)')
    cy.url().should('contain', '/my-organizations')
  });

  it.only('create Board', () => {

    cy.intercept({
      method: "POST",
      url: " https://cypress-api.vivifyscrum-stage.com/api/v2/boards",
    }).as('createBoardRequest')
    createBoard.createNewBoard('titleTest')
    cy.wait('@createBoardRequest').then((interceptObj) => {
      console.log('OBJ', interceptObj)
      expect(interceptObj.response.statusCode).eq(201)
      expect(interceptObj.response.body.name).eq('titleTest')
    })
    cy.get('span').should('contain', 'test1')
    cy.get('.vs-c-list__btn').should('contain', 'titleTest')

  })
})