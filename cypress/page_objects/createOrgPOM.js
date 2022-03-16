
export default class CreateOrg {

    get hoverOver() { return cy.get(".vs-c-list__btn").eq(1) }
    get addOrg() { return cy.get("span").contains('Add Organization') }
    get orgName() { return cy.get("input") }
    get btnNext() { return cy.get(".el-button").eq(3) }
    get btnCreate() { return cy.get(".el-button").contains('Create') }
    get btnOK() { return cy.get(".vs-c-modal--features-button").contains('OK') }
    
    addOrganization(orgName) {
        this.orgName.type(orgName)
        createOrg.btnNext.click()
        createOrg.btnCreate.click()
        createOrg.btnOK.click()
    }
}
export const createOrg = new CreateOrg();