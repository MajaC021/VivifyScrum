import { loginPage } from '../page_objects/loginPOM';

describe("login test", () => {

  beforeEach("login page", () => {
    loginPage.visitLoginPage;
    loginPage.getUrlLoginPage;
  });

  it('click on the login button', () => {
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    }).as('loginRequest')
    loginPage.loginUser();
    cy.wait('@loginRequest').then((interceptObj) => {
      expect(interceptObj.response.statusCode).eq(200)
      expect(interceptObj.response.body.user.email).eq(Cypress.env('testUserEmail'))
    })
    loginPage.checkColorSlideBar;
  });
})