// cypress/Pages/LoginPage.js

class LoginPage {
    constructor() {
        this.url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
        this.usernamePlaceholder = "input[placeholder='Username']";
        this.passwordPlaceholder = "input[placeholder='Password']";
        this.submitButtonType = "button[type='submit']";
        this.userDropdownNameSelector = ".oxd-userdropdown-name";
        this.logoSelector = '.orangehrm-login-branding > img';
        this.linksXpath = '//a';
    }

    visit() {
        cy.visit(this.url);
    }

    getUrl() {
        return cy.url();
    }

    getTitle() {
        return cy.title();
    }

    getLogo() {
        return cy.get(this.logoSelector);
    }

    getLinks() {
        return cy.xpath(this.linksXpath);
    }

    getUsernameInput() {
        return cy.get(this.usernamePlaceholder);
    }

    getPasswordInput() {
        return cy.get(this.passwordPlaceholder);
    }

    getSubmitButton() {
        return cy.get(this.submitButtonType);
    }

    getUserDropdownName() {
        return cy.get(this.userDropdownNameSelector);
    }

    login(username, password) {
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password);
        this.getSubmitButton().click();
    }
}

export default LoginPage;
