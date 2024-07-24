import { LoginPage, USER_DROPDOWN_NAME_SELECTOR } from '../Pages/AssertionsPage';
// import { EXPECTED_TEXTS } from '../constants/constants';

describe('Assertions demo', () => {

  it("Implicit assertions", () => {
    LoginPage.visit();
    LoginPage.validateURL();
    LoginPage.validateTitle();
    LoginPage.validateLogo();
    LoginPage.validateLinks();
    LoginPage.enterUsername();
    LoginPage.enterPassword();
    LoginPage.validateLoginButtonVisibility();
    LoginPage.submit();
    LoginPage.validateNavBar();
    LoginPage.validateListItems();
    LoginPage.validateHeaderFontSize();
    LoginPage.validateFocus();
  });

  it("Explicit assertions", () => {
    LoginPage.visit();
    LoginPage.enterUsername();
    LoginPage.enterPassword();
    LoginPage.submit();
    LoginPage.verifyActualUser();

  });

});
