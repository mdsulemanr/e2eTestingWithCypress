describe('CSS LOCATORS', () => {

    it("csslocators", () => {

        cy.visit("http://www.automationpractice.pl/index.php?")  // fisrt visit the site

        // cy.get("input#search_query_top").type("T-Shirts")   // locate search box (through id) and then type in string
        cy.get("input.search_query[name='search_query']").type("T-Shirts")

        cy.get("button[name='submit_search']").click()  // locate submit button (through attribute) and click on it

        cy.get(".lighter").contains("T-Shirts") // Assertion, locate and look for string (through class attribute)

    })

})