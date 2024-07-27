class CSSLocatorsPage {
    // Selectors
    selectors = {
        searchBox: "input.search_query[name='search_query']",
        submitButton: "button[name='submit_search']",
        resultText: ".lighter"
    }

    // String constants
    strings = {
        url: "http://www.automationpractice.pl/index.php?",
        searchQuery: "T-Shirts"
    }

    // Actions
    visit() {
        cy.visit(this.strings.url);
    }

    typeInSearchBox(query) {
        cy.get(this.selectors.searchBox).type(query);
    }

    clickSubmitButton() {
        cy.get(this.selectors.submitButton).click();
    }

    // Assertions
    verifyResultTextContains(expectedText) {
        cy.get(this.selectors.resultText).contains(expectedText);
    }
}

export default CSSLocatorsPage;
