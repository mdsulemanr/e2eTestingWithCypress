//  test url: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

// const { forEach } = require("cypress/types/lodash")

describe('My TestSuite', () => {

    it('FixturesDemoTest', ()=>{
        cy.fixture("orangehrm2").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((userdata)=>{

            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()

            if(userdata.username=="Admin" && userdata.password=="admin123")
            {
                cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text", userdata.expected)
                cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click() // logout
                cy.wait(5000)
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click()    // logout for next iteration for wrong credentials
                cy.wait(10000)
                cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").should("have.text", "Login")

            }
            // assertiions for invalid credentials
            else{
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", userdata.expected)
            }

            })
        })
        
    })


})