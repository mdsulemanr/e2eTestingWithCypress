class CaptureScreenshot {
    // Selectors
    selectors = {
        logo: "img[title='Your Store']",
        cameraPageLink: "li:nth-child(7) a:nth-child(1)",
        widgetCheckbox: "#cf-chl-widget-gfjey",
        tabletsText: "div[id='content'] h2"
    }

    // String constants
    strings = {
        homepageScreenshot: "homepage",
        logoScreenshot: "logo",
        expectedTabletsText: "Tablets"
    }

    // Getters
    getLogo() {
        return cy.get(this.selectors.logo);
    }

    getCameraPageLink() {
        return cy.get(this.selectors.cameraPageLink);
    }

    getWidgetCheckbox() {
        return cy.get(this.selectors.widgetCheckbox);
    }

    getTabletsText() {
        return cy.get(this.selectors.tabletsText);
    }

    // Actions
    visit() {
        cy.visit("https://demo.opencart.com/");
    }

    captureHomepageScreenshot() {
        cy.screenshot(this.strings.homepageScreenshot);
    }

    clickCameraPage() {
        this.getCameraPageLink().click();
    }

    checkWidget() {
        this.getWidgetCheckbox().check();
    }

    captureLogoScreenshot() {
        this.getLogo().screenshot(this.strings.logoScreenshot);
    }

    // Assertions
    verifyWidgetChecked() {
        this.getWidgetCheckbox().should("be.checked");
    }

    verifyTabletsText() {
        this.getTabletsText().should("have.text", this.strings.expectedTabletsText);
    }
}

export default CaptureScreenshot;
