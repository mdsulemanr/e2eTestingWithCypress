import Login from "../Pages/LoginPage"     // import the Login Class
import Login2 from "../Pages/LoginPage2"    // import the Login Class

describe('LoginWithPOM', ()=>{

    it('LoginWithPOM', ()=>{

        // General Approach
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard")
    })

    // Using POM - Using Login Class from LoginPage.js
    it('Using POM', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln=new Login; // created object of class "Login"

        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })

    // Using POM - Using Login Class from LoginPage2.js
    it('Using POM', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln=new Login2; // created object of class "Login"

        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin()
    })

    // Using POM (with fixture) - Using Login Class from LoginPage2.js
    it.only('Using POM with fixture', ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture("orangehrm.json").then((data)=>{
            const ln=new Login2; // created object of class "Login"

            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin()
    
        })
    })
})