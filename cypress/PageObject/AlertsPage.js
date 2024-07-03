/* Page Object Class for Login
There are multiple ways of creating Page Object Class, here is an otherway
*/

class javascriptAlert {
    // instance variables - putting elements here
    txtButton = "button[onclick='jsAlert()']"
    txtWindow = "window:alert"
    txtAlert = "I am a JS Alert"
    txtResult = "#result"
    msgAlert = "You successfully clicked an alert"

    // static methods (action methods) - using above elements (stored in variables)
    getButton() {
        return cy.get(this.txtButton) // this keyword representing this class

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