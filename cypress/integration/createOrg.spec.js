import { createOrg } from '../page_objects/createOrgPOM';
import { loginPage } from '../page_objects/loginPOM';

describe("create org test", () => {

  beforeEach("visit board", () => {
    cy.visit("/login");
    loginPage.loginUser('test1@gmail.com', 'test123');
    cy.wait(1000)
    cy.get('.vs-l-sidebar').should('have.css', 'background-color', 'rgb(41, 41, 41)')
    cy.url().should('contain', '/my-organizations')
  });

  it('create Organization', () => {
    cy.intercept({
      method: "POST",
      url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
    }).as('organizationRequest')
    createOrg.hoverOver.click({ force: true })
    createOrg.addOrg.click()
    createOrg.addOrganization("test1");
    cy.wait('@organizationRequest').then((interceptObj) => {
      console.log('OBJ', interceptObj)
      expect(interceptObj.response.statusCode).eq(201)
      expect(interceptObj.response.body.name).eq("test1")
    })
    cy.get('span').should('contain', 'test1')
  });
})