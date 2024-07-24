export class LoginPage {
  static LOGIN_URL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
  static USERNAME_SELECTOR = "input[placeholder='Username']";
  static PASSWORD_SELECTOR = "input[placeholder='Password']";
  static SUBMIT_BUTTON_SELECTOR = "button[type='submit']";
  static LOGO_SELECTOR = ".orangehrm-login-branding > img";
  static USER_DROPDOWN_NAME_SELECTOR = ".oxd-userdropdown-name";
  static LINK_XPATH = '//a';
  static NAVBAR_SELECTOR = '.oxd-navbar-nav';
  static LIST_ITEMS_SELECTOR = '.oxd-main-menu-item-wrapper';
  static HEADER_SELECTOR = 'h6';
  static INPUT_SELECTOR = 'input';

  static EXPECTED_TEXTS = {
    urlIncludes: 'orangehrmlive.com',
    urlContains: 'orangehrm',
    titleIncludes: 'Orange',
    titleEquals: 'OrangeHRM',
    titleContains: 'HRM',
    expectedUserName: 'Ravi Arole',
    linkCount: '5'
  };

  static CREDENTIALS = {
    username: 'Admin',
    password: 'admin123'
  };

  static visit() {
    cy.visit(this.LOGIN_URL);
  }

  static validateURL() {
    cy.url().should('include', this.EXPECTED_TEXTS.urlIncludes)
            .and('eq', this.LOGIN_URL)
            .and('contain', this.EXPECTED_TEXTS.urlContains)
            .and('not.contain', 'greenhrm');
  }

  static validateTitle() {
    cy.title().should('include', this.EXPECTED_TEXTS.titleIncludes)
             .and('eq', this.EXPECTED_TEXTS.titleEquals)
             .and('contain', this.EXPECTED_TEXTS.titleContains);
  }

  static validateLogo() {
    cy.get(this.LOGO_SELECTOR).should('be.visible')
                              .and('exist');
  }

  static validateLinks() {
    cy.xpath(this.LINK_XPATH).should('have.length', this.EXPECTED_TEXTS.linkCount);
  }

  static validateLoginButtonVisibility() {
    cy.get(this.SUBMIT_BUTTON_SELECTOR).should('be.visible')
                                       .and('exist');
  }

  static enterUsername(username = this.CREDENTIALS.username) {
    cy.get(this.USERNAME_SELECTOR).type(username)
                                  .should('have.value', username);
  }

  static enterPassword(password = this.CREDENTIALS.password) {
    cy.get(this.PASSWORD_SELECTOR).type(password)
                                  .should('have.value', password);
  }

  static submit() {
    cy.get(this.SUBMIT_BUTTON_SELECTOR).click();
  }

  static verifyActualUser(expName = this.EXPECTED_TEXTS.expectedUserName) {
    cy.get(this.USER_DROPDOWN_NAME_SELECTOR).then((compareName) => {
      const actName = compareName.text();
      expect(actName).to.equal(expName);
      expect(actName).to.not.equal(expName);

      assert.equal(expName, actName);
      assert.notEqual(expName, actName);
    });
  }

  static validateNavBar() {
    cy.get(this.NAVBAR_SELECTOR).should('be.visible')
                                .and('exist');
  }

  static validateWelcomeMessage() {
    cy.get(this.WELCOME_MESSAGE_SELECTOR).should('be.visible')
                                         .and('contain.text', 'Welcome');
  }

  static validateListItems() {
    cy.get(this.LIST_ITEMS_SELECTOR).should('have.length.greaterThan', 0);
  }

  static validateHeaderFontSize() {
    cy.get(this.HEADER_SELECTOR).should('have.css', 'font-size', '24px');
  }

  static validateFocus() {
    cy.get(this.INPUT_SELECTOR).first().focus().should('have.focus');
  }
}
