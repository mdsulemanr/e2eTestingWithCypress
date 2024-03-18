/*  test url: https://demo.nopcommerce.com/
Click on link using label
over writing existing contains() command
re-usalbe custom command
*/
describe('Custom Commands', () => {
    it('Handling links', () => {
        cy.visit("https://demo.nopcommerce.com/")
        // by using direct method
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        // by using custom command
        // cy.scrollIntoView("img[title='Show details for Apple MacBook Pro 13-inch']")
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch")

      })

      it('Over writing existing commands', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch")


      })

      it.only('Login Commands', () => {
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Log in")
        cy.loginapp("test01_demo@yopmail.com", "OneAcademy!1")
        cy.get(".ico-account").should("have.text", "My account")

      })


})