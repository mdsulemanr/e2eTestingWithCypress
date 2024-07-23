// cypress/e2e/assertionsDemo.spec.js

import LoginPage from '../pages/LoginPage';
import { TEXTS, EXPECTED_VALUES } from '../constants/constants';

describe('Assertions demo', () => {
    const loginPage = new LoginPage();

    it("Implicit assertions", () => {
        loginPage.visit();

        // URL assertions
        loginPage.getUrl().should('include', TEXTS.login.partialUrl);
        loginPage.getUrl().should('eq', TEXTS.login.exactUrl);
        loginPage.getUrl().should('contain', TEXTS.login.urlFragment);

        // Chained assertions
        loginPage.getUrl().should('include', TEXTS.login.partialUrl)
            .should('eq', TEXTS.login.exactUrl)
            .should('contain', TEXTS.login.urlFragment);
        
        loginPage.getUrl().should('include', TEXTS.login.partialUrl)
            .and('eq', TEXTS.login.exactUrl)
            .and('contain', TEXTS.login.urlFragment)
            .and('not.contain', TEXTS.login.incorrectUrlFragment);

        // Title assertions
        loginPage.getTitle().should('include', TEXTS.login.titleContains)
            .and('eq', TEXTS.login.exactTitle)
            .and('contain', TEXTS.login.titleFragment);

        // Logo assertions
        loginPage.getLogo().should('be.visible')
            .and('exist');

        // Links assertions
        loginPage.getLinks().should('have.length', TEXTS.login.linksCount);

        // Username input assertions
        loginPage.getUsernameInput().type(TEXTS.login.username);
        loginPage.getUsernameInput().should('have.value', EXPECTED_VALUES.login.username);
    });

    it("Explicit assertions", () => {
        loginPage.visit();
        loginPage.login(TEXTS.login.username, "admin123");

        let expName = TEXTS.login.expectedName;

        // BDD Style
        loginPage.getUserDropdownName().then((compareName) => {
            let actName = compareName.text();
            expect(actName).to.equal(expName);
            expect(actName).to.not.equal(expName);

            // TDD Style
            assert.equal(expName, actName);
            assert.notEqual(expName, actName);
        });
    });
});
