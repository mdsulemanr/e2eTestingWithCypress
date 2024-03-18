//  https://docs.cypress.io/api/cypress-api/catalog-of-events

describe('Alerts', () => {

//java alert
//ok button
it('javascript alert', ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()

    cy.on("window:alert", (t)=>{
        expect(t).to.contains("I am a JS Alert")
    })
    // alert window will automatically be cloased by cypress
    // after that, validate the text message
    cy.get("#result").should("have.text", "You successfully clicked an alert")
})

it("JS Confirm alert - cancel button", ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    // validate alert text message
    cy.on("window:confirm", (t)=>{
        expect(t).to.contains("I am a JS Confirm")
    })
    // close the confirm alert by cancel button
    cy.on("window:confirm", ()=> false)
    //validate text after cancel
    cy.get("#result").should("have.text", "You clicked: Cancel")
})


//Javascript confirmation alert: ok and cancel button alongwith the text
it("JS Confirm alert", ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on("window:confirm", (t)=>{
        expect(t).to.contains("I am a JS Confirm")
    // alert window will automatically be cloased by cypress by clicking ok button by default
    // after that, validate the text message
    cy.get("#result").should("have.text", "You clicked: Ok")
    })

})

//prompt alert: text box for user text input with "OK" button
it("JS Prompt alert", ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win)=>{
        cy.stub(win, 'prompt').returns('welcome')
    })
    cy.get("button[onclick='jsPrompt()']").click()

    // alert window will automatically be cloased by cypress by clicking ok button by default
    cy.get("#result").should("have.text", "You entered: welcome")
    })

//prompt alert: text box for user text input with "CANCEL" button
it("JS Prompt alert", ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win)=>{
        cy.stub(win, 'prompt').returns('welcome')
    })
    cy.get("button[onclick='jsPrompt()']").click()

    // close the confirm alert by cancel button
    // cy.on("window:prompt", ()=> false) ITS NOT WORKING FOR NOW...........................................

    // alert window will automatically be cloased by cypress by clicking ok button by default
    cy.get("#result").should("have.text", "You entered: null")
    })

//authentication alert, Approach 1
//authentication alert: text box for user name and password
it("Authenticated alert", ()=>{
    // Approach 1
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
                                                            {username: "admin",
                                                            password: "admin"}
                                                                })
    cy.get("div[class='example'] p").should("have.contain", "Congratulations")
    })

//authentication alert, Approach 2
//authentication alert: text box for user name and password

it.only("Authenticated alert", ()=>{
    // Approach 2
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should("have.contain", "Congratulations")
    })


})



