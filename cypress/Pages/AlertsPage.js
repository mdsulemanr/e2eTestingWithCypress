/* Page Object Class for Alerts of different kinds
There are multiple ways of creating Page Object Class, here is an otherway
*/

class javascriptAlert {
    // instance variables - putting elements here
    alertURL = "https://the-internet.herokuapp.com/javascript_alerts"
    authURL = "https://the-internet.herokuapp.com/basic_auth"
    authURL2 = "https://admin:admin@the-internet.herokuapp.com/basic_auth"
    txtButton = "button[onclick='jsAlert()']"
    txtCancelButton = "button[onclick='jsConfirm()']"
    txtPromptBtn = "button[onclick='jsPrompt()']"
    txtWindow = "window:alert"
    windowConfirm = "window:confirm"
    txtAlert = "I am a JS Alert"
    txtConfirmAlert = "I am a JS Confirm"
    txtResult = "#result"
    msgAlert = "You successfully clicked an alert"
    msgCancelAlert = "You clicked: Cancel"
    msgOKAlert = "You clicked: Ok"
    txtWelcome = 'welcome'
    msgWelcome = "You entered: welcome"
    msgNull = "You entered: null"
    selectConfirmMsg = "div[class='example'] p"
    msgCongrats = "Congratulations"

    CREDENTIALS = {
        username: 'admin',
        password: 'admin'
      };

    // static methods (action methods) - using above elements (stored in variables)
    getButton(txtButton) {
        return cy.get(txtButton) // this keyword representing this class

    }

    confirmAlert() {
        return cy.on(this.txtWindow, (t) => {
            expect(t).to.contains(this.txtAlert)
        })

    }

    verifyAlertTxt() {
        cy.get(this.txtResult).should("have.text", this.msgAlert)
    }

}

export default javascriptAlert;   // export this class