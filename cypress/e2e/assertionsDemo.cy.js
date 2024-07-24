import { LoginPage, USER_DROPDOWN_NAME_SELECTOR } from '../Pages/AssertionsPage';
import { EXPECTED_TEXTS } from '../constants/constants';

describe('Assertions demo', () => {

  it("Implicit assertions", () => {
    LoginPage.visit();
    LoginPage.validateURL();
    LoginPage.validateTitle();
    LoginPage.validateLogo();
    LoginPage.validateLinks();
    LoginPage.enterUsername();
    LoginPage.validateLoginButtonVisibility();
    LoginPage.validateNavBar();
    LoginPage.validateWelcomeMessage();
    LoginPage.validateListItems();
    LoginPage.validateHeaderFontSize();
    LoginPage.validateFocus();
  });

  it("Explicit assertions", () => {
    LoginPage.visit();
    LoginPage.enterUsername();
    LoginPage.enterPassword();
    LoginPage.submit();

    const expName = EXPECTED_TEXTS.expectedUserName;

    cy.get(USER_DROPDOWN_NAME_SELECTOR).then((compareName) => {
      const actName = compareName.text();
      expect(actName).to.equal(expName);
      expect(actName).to.not.equal(expName);

      assert.equal(expName, actName);
      assert.notEqual(expName, actName);
    });
  });

});
