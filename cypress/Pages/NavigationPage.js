class NavigationPage {
    // Selectors
    selectors = {
        cameraLink: "li:nth-child(7) a:nth-child(1)",
        widgetCheckbox: "#cf-chl-widget-gfjey",
        camerasHeader: "div[id='content'] h2"
    }

    // String constants
    strings = {
        opencartUrl: "https://demo.opencart.com/",
        homePageTitle: "Your Store",
        camerasHeaderText: "Cameras"
    }

    // Getters
    getCameraLink() {
        return cy.get(this.selectors.cameraLink);
    }

    getWidgetCheckbox() {
        return cy.get(this.selectors.widgetCheckbox);
    }

    getCamerasHeader() {
        return cy.get(this.selectors.camerasHeader);
    }

    // Actions
    visitOpencart() {
        cy.visit(this.strings.opencartUrl);
    }

    clickCameraLink() {
        this.getCameraLink().click();
    }

    checkWidgetCheckbox() {
        this.getWidgetCheckbox().check().should("be.checked");
    }

    reloadPage() {
        cy.reload();
    }

    // Assertions
    verifyHomePageTitle() {
        cy.title().should("eq", this.strings.homePageTitle);
    }

    verifyCamerasHeader() {
        this.getCamerasHeader().should("have.text", this.strings.camerasHeaderText);
    }
}

export default NavigationPage;
