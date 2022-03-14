
export default class CreateOrg{

    get hoverOver() { return cy.get(".vs-c-list__btn").eq(1)}
    get addOrg()  { return cy.get("span").contains('Add Organization')}
    get orgName()  { return cy.get("input")}
}
export const createOrg = new CreateOrg();