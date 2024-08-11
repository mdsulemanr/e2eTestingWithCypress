import DropdownPage from '../Pages/DropDown';

describe('Select dropdown', () => {
    const dropdownPage = new DropdownPage();

    it("Select dropdown - Zoho", () => {
        dropdownPage.visitZoho();
        dropdownPage.selectCountryFromZohoDropdown(dropdownPage.strings.countryItaly);
        dropdownPage.verifyCountrySelectedInZohoDropdown(dropdownPage.strings.countryItaly);
    });

    it("Select dropdown - Dummy Ticket", () => {
        dropdownPage.visitDummyticket();
        dropdownPage.clickDummyticketCountryContainer();
        dropdownPage.typeAndSelectCountryInDummyticket(dropdownPage.strings.countryIran);
        dropdownPage.verifyCountrySelectedInDummyticket(dropdownPage.strings.countryIran);
    });

    it("Auto suggested dropdown - Wikipedia", () => {
        dropdownPage.visitWikipedia();
        dropdownPage.typeInWikipediaSearchInput(dropdownPage.strings.cityDehli);
        dropdownPage.clickOnWikipediaSuggestion(dropdownPage.strings.suggestionDehli9);
    });

    it("Dynamic dropdown - Google", () => {
        dropdownPage.visitGoogle();
        dropdownPage.typeInGoogleSearchTextarea(dropdownPage.strings.googleSearchQuery);
        cy.wait(3000);
        dropdownPage.verifyGoogleSuggestionsCount(dropdownPage.strings.googleSuggestionLength);
        dropdownPage.clickOnGoogleSuggestion(dropdownPage.strings.googleExpectedResult);
        dropdownPage.verifyGoogleSearchTextareaValue(dropdownPage.strings.googleExpectedResult);
    });
});
