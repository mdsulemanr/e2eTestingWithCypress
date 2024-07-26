//  https://docs.cypress.io/api/cypress-api/catalog-of-events

import "../Pages/AlertsPage"
import javascriptAlert from "../Pages/AlertsPage"

describe('Dealing with different kind of Alert Windows', () => {

    beforeEach('visit site', () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })

    //java alert
    //ok button
    it('JS alert', () => {

        const alerts = new javascriptAlert;  // created object

        alerts.getButton().click()
        alerts.confirmAlert()

        // alert window will automatically be cloased by cypress
        // after that, validate the text message
        alerts.verifyAlertTxt()
    })

    it("JS Confirm alert - cancel button", () => {
        cy.get("button[onclick='jsConfirm()']").click()

        // validate alert text message
        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm")
        })
        // close the confirm alert by cancel button
        cy.on("window:confirm", () => false)
        //validate text after cancel
        cy.get("#result").should("have.text", "You clicked: Cancel")
    })


    //Javascript confirmation alert: ok and cancel button alongwith the text
    it("JS Confirm alert", () => {
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on("window:confirm", (t) => {
            expect(t).to.contains("I am a JS Confirm")
            // alert window will automatically be cloased by cypress by clicking ok button by default
            // after that, validate the text message
            cy.get("#result").should("have.text", "You clicked: Ok")
        })

    })

    //prompt alert: text box for user text input with "OK" button
    it("JS Prompt alert", () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()

        // alert window will automatically be cloased by cypress by clicking ok button by default
        cy.get("#result").should("have.text", "You entered: welcome")
    })

    //prompt alert: text box for user text input with "CANCEL" button
    it("JS Prompt alert", () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('welcome')
        })
        cy.get("button[onclick='jsPrompt()']").click()

        // close the confirm alert by cancel button
        // cy.on("window:prompt", ()=> false) ITS NOT WORKING FOR NOW...........................................

        // alert window will automatically be cloased by cypress by clicking ok button by default
        cy.get("#result").should("have.text", "You entered: null")
    })
})


describe('auth', () => {

    //authentication alert, Approach 1
    //authentication alert: text box for user name and password
    it("Authenticated alert", () => {
        // Approach 1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {
            auth:
            {
                username: "admin",
                password: "admin"
            }
        })
        cy.get("div[class='example'] p").should("have.contain", "Congratulations")
    })

    //authentication alert, Approach 2
    //authentication alert: text box for user name and password

    it("Authenticated alert", () => {
        // Approach 2
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should("have.contain", "Congratulations")
    })
})





