describe('xPath LOCATORS', () => {

    it("find all no of images on the page", () => {

        cy.visit("http://www.automationpractice.pl/index.php?")  // fisrt visit the site

        cy.get("input.search_query[name='search_query']").type("T-Shirts")


    })

})