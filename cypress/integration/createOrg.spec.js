import { createOrg } from '../page_objects/createOrgPOM';
import { loginPage } from '../page_objects/loginPOM';

describe("create org test", () => {

  beforeEach("visit board", () => {
    loginPage.visitLoginPage;
    cy.intercept({
      method: "POST",
      url:"https://cypress-api.vivifyscrum-stage.com/api/v2/login",
    }).as('loginRequest')
    loginPage.loginUser();
    cy.wait('@loginRequest').then((interceptObj) => {
      expect(interceptObj.response.statusCode).eq(200)
      loginPage.checkColorSlideBar
      createOrg.checkUrlOrg;
    });
  });

  it('create Organization', () => {
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
    }).as('organizationRequest')
    createOrg.hoverOver.click({ force: true })
    createOrg.addOrg.click()
    createOrg.addOrganization();
    cy.wait('@organizationRequest').then((interceptObj) => {
      expect(interceptObj.response.statusCode).eq(201)
      expect(interceptObj.response.body.name).eq(Cypress.env('orgName'))
    })
    createOrg.checkOrgName
  });
})