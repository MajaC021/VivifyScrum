export default class LoginPage {

    get email() { return cy.get('input').eq(0) }
    get password() { return cy.get('input').eq(1) }
    get btn() { return cy.get('button').eq(0) }
    get btnCancel() { return cy.get('button').eq(0) }
    get visitLoginPage() {return cy.visit("/login")}
    get getUrlLoginPage() {return cy.url().should('contain', '/login')}
    get checkColorSlideBar() {return  cy.get('.vs-l-sidebar').should('have.css', 'background-color', 'rgb(41, 41, 41)')}

    loginUser() {
        let email = Cypress.env('testUserEmail');
        let password = Cypress.env('testUserPass');

        this.email.type(email)
        this.password.type(password)
        loginPage.btn.click();
    }
}
export const loginPage = new LoginPage();


