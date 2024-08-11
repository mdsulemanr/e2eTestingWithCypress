class DropdownPage {
    // Selectors
    selectors = {
        zohoCountryDropdown: "#zcf_address_country",
        dummyticketCountryContainer: "#select2-billing_country-container",
        dummyticketSearchField: "input.select2-search__field[role='combobox']",
        wikipediaSearchInput: "#searchInput",
        wikipediaSuggestionTitle: ".suggestion-title",
        googleSearchTextarea: "textarea#APjFqb",
        googleSuggestions: "div.wM6W7d>span"
    }

    // String constants
    strings = {
        zohoUrl: "https://www.zoho.com/commerce/free-demo.html",
        dummyticketUrl: "https://www.dummyticket.com/dummy-ticket-for-visa-application/",
        wikipediaUrl: "https://www.wikipedia.org/",
        googleUrl: "https://www.google.com/",
        countryItaly: "Italy",
        countryIran: "Iran",
        cityDehli: "Dehli",
        suggestionDehli9: "Dehli9",
        googleSearchQuery: "cypress automation",
        googleExpectedResult: "cypress automation tutorial",
        googleSuggestionLength: 13
    }

    // Getters
    getZohoCountryDropdown() {
        return cy.get(this.selectors.zohoCountryDropdown);
    }

    getDummyticketCountryContainer() {
        return cy.get(this.selectors.dummyticketCountryContainer);
    }

    getDummyticketSearchField() {
        return cy.get(this.selectors.dummyticketSearchField);
    }

    getWikipediaSearchInput() {
        return cy.get(this.selectors.wikipediaSearchInput);
    }

    getWikipediaSuggestionTitle() {
        return cy.get(this.selectors.wikipediaSuggestionTitle);
    }

    getGoogleSearchTextarea() {
        return cy.get(this.selectors.googleSearchTextarea);
    }

    getGoogleSuggestions() {
        return cy.get(this.selectors.googleSuggestions);
    }

    // Actions
    visitZoho() {
        cy.visit(this.strings.zohoUrl);
    }

    visitDummyticket() {
        cy.visit(this.strings.dummyticketUrl);
    }

    visitWikipedia() {
        cy.visit(this.strings.wikipediaUrl);
    }

    visitGoogle() {
        cy.visit(this.strings.googleUrl);
    }

    selectCountryFromZohoDropdown(country) {
        this.getZohoCountryDropdown().select(country);
    }

    clickDummyticketCountryContainer() {
        this.getDummyticketCountryContainer().click();
    }

    typeAndSelectCountryInDummyticket(country) {
        this.getDummyticketSearchField().type(country).type('{enter}');
    }

    typeInWikipediaSearchInput(text) {
        this.getWikipediaSearchInput().type(text);
    }

    clickOnWikipediaSuggestion(suggestion) {
        this.getWikipediaSuggestionTitle().contains(suggestion).click();
    }

    typeInGoogleSearchTextarea(text) {
        this.getGoogleSearchTextarea().type(text);
    }

    clickOnGoogleSuggestion(text) {
        this.getGoogleSuggestions().each(($el) => {
            if ($el.text() === text) {
                cy.wrap($el).click();
            }
        });
    }

    // Assertions
    verifyCountrySelectedInZohoDropdown(country) {
        this.getZohoCountryDropdown().should("have.value", country);
    }

    verifyCountrySelectedInDummyticket(country) {
        this.getDummyticketCountryContainer().should("have.text", country);
    }

    verifyGoogleSuggestionsCount(expectedCount) {
        this.getGoogleSuggestions().should("have.length", expectedCount);
    }

    verifyGoogleSearchTextareaValue(expectedValue) {
        this.getGoogleSearchTextarea().should("have.value", expectedValue);
    }
}

export default DropdownPage;
