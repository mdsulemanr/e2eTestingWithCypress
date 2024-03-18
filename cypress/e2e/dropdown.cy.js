describe('select dropdown', () => {

    it.skip("Select dropdown", () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")  // fisrt visit the site

        // select country from dropdown
        cy.get("#zcf_address_country").select("Italy").should("have.value", "Italy")

    })


    it.skip("Select dropdown", () => {

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")  // fisrt visit the site

        // select country from dropdown
        cy.get('#select2-billing_country-container').click()
        cy.get("input.select2-search__field[role='combobox']").type("Iran").type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text', 'Iran')

    })

    it.skip("auto suggested dropdown", () => {

        cy.visit("https://www.wikipedia.org/")  // fisrt visit the site

        // select country from dropdown
        cy.get('#searchInput').type("Dehli")
        cy.get(".suggestion-title").contains("Dehli9").click()


    })

    it("Dynamic dropdown", () => {

        cy.visit("https://www.google.com/")  // fisrt visit the site

        // select country from dropdown
        cy.get('textarea#APjFqb').type("cypress automation")
        cy.wait(3000)

        cy.get('div.wM6W7d>span').should("have.length", 13)

        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            if ($el.text() === 'cypress automation tutorial') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            } 
          })
        
            cy.get('textarea#APjFqb').should("have.value", "cypress automation tutorial")


    })

})