import {
    LOGIN_URL,
    USERNAME_SELECTOR,
    PASSWORD_SELECTOR,
    SUBMIT_BUTTON_SELECTOR,
    LOGO_SELECTOR,
    LINKS_XPATH,
    USER_DROPDOWN_NAME_SELECTOR,
    LOGIN_BUTTON_SELECTOR,
    NAV_BAR_SELECTOR,
    WELCOME_MESSAGE_SELECTOR,
    LIST_ITEMS_SELECTOR,
    HEADER_SELECTOR,
    EXPECTED_URL,
    EXPECTED_TEXTS,
    LINK_COUNT,
    HEADER_FONT_SIZE,
    CREDENTIALS
  } from '../constants/constants';
  
  export class LoginPage {
    static visit() {
      cy.visit(LOGIN_URL);
    }
  
    static validateURL() {
      cy.url().should('include', EXPECTED_TEXTS.urlIncludes)
              .and('eq', EXPECTED_URL)
              .and('contain', EXPECTED_TEXTS.urlContains)
              .and('not.contain', 'greenhrm');
    }
  
    static validateTitle() {
      cy.title().should('include', EXPECTED_TEXTS.titleIncludes)
               .and('eq', EXPECTED_TEXTS.titleEquals)
               .and('contain', EXPECTED_TEXTS.titleContains);
    }
  
    static validateLogo() {
      cy.get(LOGO_SELECTOR).should('be.visible')
                           .and('exist');
    }
  
    static validateLinks() {
      cy.xpath(LINKS_XPATH).should('have.length', LINK_COUNT);
    }
  
    static enterUsername(username = CREDENTIALS.username) {
      cy.get(USERNAME_SELECTOR).type(username)
                               .should('have.value', username);
    }
  
    static enterPassword(password = CREDENTIALS.password) {
      cy.get(PASSWORD_SELECTOR).type(password)
                               .should('have.value', password);
    }
  
    static submit() {
      cy.get(SUBMIT_BUTTON_SELECTOR).click();
    }
  
    static validateLoginButtonVisibility() {
      cy.get(LOGIN_BUTTON_SELECTOR).should('be.visible');
    }
  
    static validateNavBar() {
      cy.get(NAV_BAR_SELECTOR).should('have.class', 'active');
    }
  
    static validateWelcomeMessage() {
      cy.get(WELCOME_MESSAGE_SELECTOR).should('contain', EXPECTED_TEXTS.welcomeMessage);
    }
  
    static validateListItems() {
      cy.get(LIST_ITEMS_SELECTOR).should('have.length', LINK_COUNT);
    }
  
    static validateHeaderFontSize() {
      cy.get(HEADER_SELECTOR).should('have.css', 'font-size', HEADER_FONT_SIZE);
    }
  
    static validateFocus() {
      cy.get(USERNAME_SELECTOR).focus().should('have.focus');
    }
  }
  