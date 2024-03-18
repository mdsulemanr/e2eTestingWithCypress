describe('My Suite', () => {
    it('Capture SS & Videos', () => {
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homepage")
        cy.wait(5000)
        cy.get("img[title='Your Store']").screenshot("logo")

    })

    it.only('Capture SS & Videos - Automatically', () => {
        cy.visit("https://demo.opencart.com/")

        // Automatically capture SS & Video on failure - only when you execute through CLI
        cy.get("li:nth-child(7) a:nth-child(1)").click() // Camera Page
        cy.wait(5000)
        cy.get("cy.get('#cf-chl-widget-gfjey')").check().should("be.checked")
        cy.get("div[id='content'] h2").should("have.text", "Tablets")

    })

})
