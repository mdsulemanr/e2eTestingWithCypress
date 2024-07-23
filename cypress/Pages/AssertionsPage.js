class LoginPage {
    visit() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    getUrl() {
        return cy.url()
    }

    getTitle() {
        return cy.title()
    }

    getLogo() {
        return cy.get('.orangehrm-login-branding > img')
    }

    getLinks() {
        return cy.xpath('//a')
    }

    getUsernameInput() {
        return cy.get("input[placeholder='Username']")
    }

    getPasswordInput() {
        return cy.get("input[placeholder='Password']")
    }

    getSubmitButton() {
        return cy.get("button[type='submit']")
    }

    getUserDropdownName() {
        return cy.get(".oxd-userdropdown-name")
    }

    login(username, password) {
        this.getUsernameInput().type(username)
        this.getPasswordInput().type(password)
        this.getSubmitButton().click()
    }
}

export default LoginPage
