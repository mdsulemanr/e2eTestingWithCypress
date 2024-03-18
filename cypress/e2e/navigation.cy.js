describe('MySuite', () => {
    it('NavigationTest', () => {
        cy.visit("https://demo.opencart.com/")

        cy.title().should("eq", "Your Store")  // home page
        cy.get("li:nth-child(7) a:nth-child(1)").click()  // camera page
        cy.wait(5000)
        cy.get("cy.get('#cf-chl-widget-gfjey')").check().should("be.checked")
        cy.get("div[id='content'] h2").should("have.text", "Cameras")

        cy.go("back")
        cy.title().should("eq", "Your Store")  // home page

        cy.go("forward")  // camera page
        cy.wait(5000)
        cy.get("cy.get('#cf-chl-widget-gfjey')").check().should("be.checked")
        cy.get("div[id='content'] h2").should("have.text", "Cameras")

        cy.go(-1)
        cy.title().should("eq", "Your Store")  // home page

        cy.go(1)
        cy.wait(5000)
        cy.get("cy.get('#cf-chl-widget-gfjey')").check().should("be.checked")
        cy.get("div[id='content'] h2").should("have.text", "Cameras")

        cy.reload()

    })

})