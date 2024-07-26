//  https://docs.cypress.io/api/cypress-api/catalog-of-events

// import "../Pages/AlertsPage"
import javascriptAlert from "../Pages/AlertsPage"


const alerts = new javascriptAlert;  // created object

describe('Dealing with different kind of Alert Windows', () => {

    beforeEach('visit site', () => {
        cy.visit(alerts.alertURL)
    })

    //java alert
    //ok button
    it('JS alert', () => {

        alerts.getButton(alerts.txtButton).click()
        alerts.confirmAlert()

        // alert window will automatically be cloased by cypress
        // after that, validate the text message
        alerts.verifyAlertTxt()
    })

    it("JS Confirm alert - cancel button", () => {
        alerts.getButton(alerts.txtCancelButton).click()

        // validate alert text message
        cy.on(alerts.windowConfirm, (t) => {
            expect(t).to.contains(alerts.txtConfirmAlert)
        })
        // close the confirm alert by cancel button
        cy.on(alerts.windowConfirm, () => false)
        //validate text after cancel
        cy.get(alerts.txtResult).should("have.text", alerts.msgCancelAlert)
    })


    //Javascript confirmation alert: ok and cancel button alongwith the text
    it("JS Confirm alert", () => {
        cy.get(alerts.txtCancelButton).click()

        cy.on("window:confirm", (t) => {
            expect(t).to.contains(alerts.txtConfirmAlert)
            // alert window will automatically be cloased by cypress by clicking ok button by default
            // after that, validate the text message
            cy.get(alerts.txtResult).should("have.text", alerts.msgOKAlert)
        })

    })

    //prompt alert: text box for user text input with "OK" button
    it("JS Prompt alert", () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(alerts.txtWelcome)
        })
        cy.get(alerts.txtPromptBtn).click()

        // alert window will automatically be cloased by cypress by clicking ok button by default
        cy.get(alerts.txtResult).should("have.text", alerts.msgWelcome)
    })

    //prompt alert: text box for user text input with "CANCEL" button
    it("JS Prompt alert", () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(alerts.txtWelcome)
        })
        cy.get(alerts.txtPromptBtn).click()

        // close the confirm alert by cancel button
        // cy.on("window:prompt", ()=> false) ITS NOT WORKING FOR NOW...........................................

        // alert window will automatically be cloased by cypress by clicking ok button by default
        cy.get(alerts.txtResult).should("have.text", alerts.msgNull)
    })
})


describe.only('auth', () => {

    //authentication alert, Approach 1
    //authentication alert: text box for user name and password
    it("Authenticated alert", () => {
        // Approach 1
        cy.visit(alerts.authURL, {
            auth:
            {
                username: alerts.CREDENTIALS.username,
                password: alerts.CREDENTIALS.password
            }
        })
        cy.get(alerts.selectConfirmMsg).should("have.contain", alerts.msgCongrats)
    })

    //authentication alert, Approach 2
    //authentication alert: text box for user name and password

    it.only("Authenticated alert", () => {
        // Approach 2
        cy.visit(alerts.authURL2)
        cy.get(alerts.selectConfirmMsg).should("have.contain", alerts.msgCongrats)
    })
})





