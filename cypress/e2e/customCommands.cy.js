import CustomCommandsPage from '../Pages/CustomCommandsPage';

describe('Custom Commands', () => {
    const customCommandsPage = new CustomCommandsPage();

    it('Handling links', () => {
        customCommandsPage.visit();
        // By using direct method
        customCommandsPage.clickMacBookLink();
        // By using custom command
        customCommandsPage.scrollToMacBookImage();
        customCommandsPage.clickLinkUsingLabel(customCommandsPage.strings.macBookText);
        customCommandsPage.verifyMacBookTitle();
    });

    it('Over writing existing commands', () => {
        customCommandsPage.visit();
        customCommandsPage.clickLinkUsingLabel(customCommandsPage.strings.macBookText.toUpperCase());
        customCommandsPage.verifyMacBookTitle();
    });

    it.only('Login Commands', () => {
        customCommandsPage.visit();
        customCommandsPage.clickLoginLink();
        customCommandsPage.login(customCommandsPage.strings.loginEmail, customCommandsPage.strings.loginPassword);
        customCommandsPage.verifyMyAccountText();
    });
});
