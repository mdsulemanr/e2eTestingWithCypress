class RadioButtonPage {
    // Selectors
    selectors = {
        maleRadioButton: "input#male",
        femaleRadioButton: "input#female",
        sundayCheckbox: "input#sunday",
        mondayCheckbox: "input#monday",
        allCheckboxes: "div.form-group input.form-check-input[type='checkbox']"
    }

    // String constants
    strings = {
        url: "https://testautomationpractice.blogspot.com/"
    }

    // Actions
    visit() {
        cy.visit(this.strings.url);
    }

    checkMaleRadioButton() {
        cy.get(this.selectors.maleRadioButton).check();
    }

    checkFemaleRadioButton() {
        cy.get(this.selectors.femaleRadioButton).check();
    }

    checkMondayCheckbox() {
        cy.get(this.selectors.mondayCheckbox).check();
    }

    uncheckMondayCheckbox() {
        cy.get(this.selectors.mondayCheckbox).uncheck();
    }

    checkAllCheckboxes() {
        cy.get(this.selectors.allCheckboxes).check();
    }

    uncheckAllCheckboxes() {
        cy.get(this.selectors.allCheckboxes).uncheck();
    }

    checkFirstCheckbox() {
        cy.get(this.selectors.allCheckboxes).first().check();
    }

    checkLastCheckbox() {
        cy.get(this.selectors.allCheckboxes).last().check();
    }

    // Custom Command for toggling checkboxes
    toggleCheckbox(selector) {
        cy.get(selector).then($checkbox => {
            if ($checkbox.is(':checked')) {
                cy.get(selector).uncheck();
            } else {
                cy.get(selector).check();
            }
        });
    }

    // Assertions
    verifyMaleRadioButtonVisible() {
        cy.get(this.selectors.maleRadioButton).should("be.visible");
    }

    verifyFemaleRadioButtonVisible() {
        cy.get(this.selectors.femaleRadioButton).should("be.visible");
    }

    verifyMaleRadioButtonChecked() {
        cy.get(this.selectors.maleRadioButton).should("be.checked");
    }

    verifyFemaleRadioButtonNotChecked() {
        cy.get(this.selectors.femaleRadioButton).should("not.be.checked");
    }

    verifyFemaleRadioButtonChecked() {
        cy.get(this.selectors.femaleRadioButton).should("be.checked");
    }

    verifyMaleRadioButtonNotChecked() {
        cy.get(this.selectors.maleRadioButton).should("not.be.checked");
    }

    verifySundayCheckboxVisible() {
        cy.get(this.selectors.sundayCheckbox).should("be.visible");
    }

    verifyMondayCheckboxVisible() {
        cy.get(this.selectors.mondayCheckbox).should("be.visible");
    }

    verifyMondayCheckboxChecked() {
        cy.get(this.selectors.mondayCheckbox).should("be.checked");
    }

    verifyMondayCheckboxNotChecked() {
        cy.get(this.selectors.mondayCheckbox).should("not.be.checked");
    }

    verifyAllCheckboxesChecked() {
        cy.get(this.selectors.allCheckboxes).should("be.checked");
    }

    verifyAllCheckboxesNotChecked() {
        cy.get(this.selectors.allCheckboxes).should("not.be.checked");
    }

    verifyFirstCheckboxChecked() {
        cy.get(this.selectors.allCheckboxes).first().should("be.checked");
    }

    verifyLastCheckboxChecked() {
        cy.get(this.selectors.allCheckboxes).last().should("be.checked");
    }

    verifyCheckboxDisabled(selector) {
        cy.get(selector).should('be.disabled');
    }

    verifyCheckboxEnabled(selector) {
        cy.get(selector).should('be.enabled');
    }

    verifyCheckboxValue(selector, expectedValue) {
        cy.get(selector).should('have.value', expectedValue);
    }

    verifyCheckboxLabel(labelText) {
        cy.contains('label', labelText).find('input[type="checkbox"]').should('be.visible');
    }
}

export default RadioButtonPage;
