// cypress/integration/assertionsDemo.spec.js

import LoginPage from '../Pages/AssertionsPage'

describe('Assertions demo', () => {
    const loginPage = new LoginPage()

    it("Implicit assertions", () => {
        loginPage.visit()

        // URL assertions
        loginPage.getUrl().should('include', 'orangehrmlive.com')
        loginPage.getUrl().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.getUrl().should('contain', 'orangehrm')

        // Chained assertions
        loginPage.getUrl().should('include', 'orangehrmlive.com')
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .should('contain', 'orangehrm')
        
        loginPage.getUrl().should('include', 'orangehrmlive.com')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .and('contain', 'orangehrm')
            .and('not.contain', 'greenhrm')

        // Title assertions
        loginPage.getTitle().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', 'HRM')

        // Logo assertions
        loginPage.getLogo().should('be.visible')
            .and('exist')

        // Links assertions
        loginPage.getLinks().should('have.length', '5')

        // Username input assertions
        loginPage.getUsernameInput().type("Admin")
        loginPage.getUsernameInput().should('have.value', 'Admin')
    })

    it("Explicit assertions", () => {
        loginPage.visit()
        loginPage.login("Admin", "admin123")

        let expName = "Ravi Arole";

        // BDD Style
        loginPage.getUserDropdownName().then((compareName) => {
            let actName = compareName.text()
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            // TDD Style
            assert.equal(expName, actName)
            assert.notEqual(expName, actName)
        })
    })
})
