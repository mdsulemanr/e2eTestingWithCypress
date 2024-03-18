describe('Assertions demo', () => {

    it("Implicit assertions", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  // fisrt visit the site

        // should, and

        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrm')

        // instead of wirting/capturing url again and again we can start next assertions with only .should keyword
        /*cy.url().should('include', 'orangehrmlive.com')
        .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain', 'orangehrm')*/

        // instead of writing should again and again
        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'greenhrm')

        // put validation on title
        cy.title().should('include', 'Orange')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')

        //put validation/assertions on Logo
        cy.get('.orangehrm-login-branding > img').should('be.visible') // logo is visible
        .and('exist') // elements exists on page

        cy.xpath('//a').should('have.length', '5') // check no of links on the page

        cy.get("input[placeholder='Username']").type("Admin") //provide value into inbox box

        cy.get("input[placeholder='Username']").should('have.value', 'Admin') // value check

    })  //Builtin assertions also called implicit assertions
        it("Explicit assertions", () => {

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")  // fisrt visit the site

            cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click()
            
            let expName = "Ravi Arole";

            //BDD Style
            cy.get(".oxd-userdropdown-name").then(  (comapareName)=>{
                let actName = comapareName.text()
                expect(actName).to.equal(expName)
                expect(actName).to.not.equal(expName)
            
                //TDD Style
                assert.equal(expName, actName)
                assert.notEqual(expName, actName)
            })
    
    
    })
 
})