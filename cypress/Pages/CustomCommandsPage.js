class CustomCommandsPage {
    // Selectors
    selectors = {
        macBookLink: "div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)",
        macBookImage: "img[title='Show details for Apple MacBook Pro 13-inch']",
        macBookTitle: "div[class='product-name'] h1",
        loginLink: "a[href='/login']",
        myAccountText: ".ico-account"
    }

    // String constants
    strings = {
        url: "https://demo.nopcommerce.com/",
        macBookText: "Apple MacBook Pro 13-inch",
        loginEmail: "test01_demo@yopmail.com",
        loginPassword: "OneAcademy!1",
        myAccount: "My account"
    }

    // Getters
    getMacBookLink() {
        return cy.get(this.selectors.macBookLink);
    }

    getMacBookImage() {
        return cy.get(this.selectors.macBookImage);
    }

    getMacBookTitle() {
        return cy.get(this.selectors.macBookTitle);
    }

    getLoginLink() {
        return cy.get(this.selectors.loginLink);
    }

    getMyAccountText() {
        return cy.get(this.selectors.myAccountText);
    }

    // Actions
    visit() {
        cy.visit(this.strings.url);
    }

    clickMacBookLink() {
        this.getMacBookLink().click();
    }

    scrollToMacBookImage() {
        this.getMacBookImage().scrollIntoView();
    }

    clickLinkUsingLabel(label) {
        cy.clickLink(label);
    }

    clickLoginLink() {
        this.getLoginLink().click();
    }

    login(email, password) {
        cy.loginapp(email, password);
    }

    // Assertions
    verifyMacBookTitle() {
        this.getMacBookTitle().should("have.text", this.strings.macBookText);
    }

    verifyMyAccountText() {
        this.getMyAccountText().should("have.text", this.strings.myAccount);
    }
}

export default CustomCommandsPage;
