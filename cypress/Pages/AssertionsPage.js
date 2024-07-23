// cypress/pages/LoginPage.js

import { URLS, SELECTORS } from '../constants/constants';

class LoginPage {
    visit() {
        cy.visit(URLS.loginPage);
    }

    getUrl() {
        return cy.url();
    }

    getTitle() {
        return cy.title();
    }

    getLogo() {
        return cy.get(SELECTORS.login.logo);
    }

    getLinks() {
        return cy.xpath(SELECTORS.login.links);
    }

    getUsernameInput() {
        return cy.get(SELECTORS.login.usernameInput);
    }

    getPasswordInput() {
        return cy.get(SELECTORS.login.passwordInput);
    }

    getSubmitButton() {
        return cy.get(SELECTORS.login.submitButton);
    }

    getUserDropdownName() {
        return cy.get(SELECTORS.login.userDropdownName);
    }

    login(username, password) {
        this.getUsernameInput().type(username);
        this.getPasswordInput().type(password);
        this.getSubmitButton().click();
    }
}

export default LoginPage;
