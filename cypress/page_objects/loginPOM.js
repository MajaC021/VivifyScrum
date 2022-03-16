export default class LoginPage {

    get email() { return cy.get('input').eq(0) }
    get password() { return cy.get('input').eq(1) }
    get btn() { return cy.get('button').eq(0) }
    get btnCancel() { return cy.get('button').eq(0) }

    loginUser(email, password) {
        this.email.type(email)
        this.password.type(password)
        loginPage.btn.click();
    }
}
export const loginPage = new LoginPage();


