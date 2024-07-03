/*  test url: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    Data Driven Testing using fixtures
    two separate tests, one for Valid Credentials, 2nd for Invalid Credentials
*/
describe('Test Login', () => {


    it('Valid Credentials', ()=>{
        cy.fixture("orangehrm").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            cy.get("input[placeholder='Username']").type(data.username)
            cy.get("input[placeholder='Password']").type(data.password)
            cy.get("button[type='submit']").click()

            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should("have.text", data.expected) // verify "Dashboard" string
            cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click() // logout
            cy.wait(5000)
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()    // logout for next it block
            cy.wait(50000)
            cy.get(".oxd-text.oxd-text--h5.orangehrm-login-title").should("have.text", "Login")

            })

        })
        

    it('Invalid Credentials', ()=>{
        cy.fixture("orangehrm3").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            cy.wait(10000)
            data.forEach((userdata)=>{

            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
            
            // User should be on login page
            cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", userdata.expected)

            })
        })
        
    })


})