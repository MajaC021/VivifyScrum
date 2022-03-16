
export default class CreateOrg {

    get hoverOver() { return cy.get(".vs-c-list__btn").eq(1) }
    get addOrg() { return cy.get("span").contains('Add Organization') }
    get orgName() { return cy.get("input") }
    get btnNext() { return cy.get(".el-button").eq(3) }
    get btnCreate() { return cy.get(".el-button").contains('Create') }
    get btnOK() { return cy.get(".vs-c-modal--features-button").contains('OK') }
    get checkUrlOrg() { return cy.url().should('contain', '/my-organizations') }
    get checkOrgName() { return  cy.get('span').should('contain',  Cypress.env('orgName')) }

    addOrganization() {
        let orgName = Cypress.env('orgName');
        this.orgName.type(orgName)
        createOrg.btnNext.click()
        createOrg.btnCreate.click()
        createOrg.btnOK.click()
    }
}
export const createOrg = new CreateOrg();