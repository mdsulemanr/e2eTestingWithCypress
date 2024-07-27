import CSSLocatorsPage from '../Pages/CssSelector';

describe('CSS LOCATORS', () => {
    const cssLocatorsPage = new CSSLocatorsPage();

    it("csslocators", () => {
        cssLocatorsPage.visit();
        cssLocatorsPage.typeInSearchBox(cssLocatorsPage.strings.searchQuery);
        cssLocatorsPage.clickSubmitButton();
        cssLocatorsPage.verifyResultTextContains(cssLocatorsPage.strings.searchQuery);
    });
});
