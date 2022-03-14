import { createOrg } from '../page_objects/createOrgPOM';
import { loginPage } from '../page_objects/loginPOM';
import "cypress-real-events/support";

describe("create org test", () => { 

    beforeEach("visit board", () => {
        cy.visit("/login");
        loginPage.loginUser('test1@gmail.com', 'test123');
        cy.wait(1000)
        cy.get('.vs-l-sidebar').should('have.css', 'background-color', 'rgb(41, 41, 41)')
        cy.url().should('contain', '/my-organizations')
      });

      it.only('create Organization', () => {

        createOrg.hoverOver.click({ force: true })
        createOrg.addOrg.click()
        createOrg.orgName.type("hdhdhd");
        // cy.intercept({method: "POST",
        // url: "https://cypress-api.vivifyscrum-stage.com/api/v2/organizations",
        // }).as('organizationRequest')
        // loginPage.createOrg("test");

        // cy.wait('@organizationRequest').then((interceptObj) => {
        //   console.log('OBJ', interceptObj)
        //   expect(interceptObj.response.statusCode).eq(200)
        //   expect(interceptObj.response.body.user.email).eq("test1@gmail.com")
        // })
        //cy.get('.vs-l-sidebar').should('have.css', 'background-color', 'rgb(41, 41, 41)')
      });
})