describe('Check Radio Buttons', () => {

    beforeEach('visit site', ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")  // fisrt visit the site

    })

    it("Select radio buttons", () => {


        // check radio buttons are visible
        cy.get("input#male").should("be.visible")
        cy.get("input#female").should("be.visible")

        // check radio buttons are checked
        cy.get("input#male").check().should("be.checked")
        cy.get("input#female").should("not.be.checked")

        // check radio buttons are checked
        cy.get("input#female").check().should("be.checked")
        cy.get("input#male").should("not.be.checked")

    })


    it("Select check boxes", () => {

        // cy.visit("https://testautomationpractice.blogspot.com/")  // fisrt visit the site

        // check check boxes are visible
        cy.get("input#sunday").should("be.visible")
        cy.get("input#monday").should("be.visible")

        // select check box
        cy.get("input#monday").check().should("be.checked")
        // un-select check box
        cy.get("input#monday").uncheck().should("not.be.checked")

        // select all check boxes at once
        cy.get("div.form-group input.form-check-input[type='checkbox']").check().should("be.checked")
        // un-select all check boxes
        cy.get("div.form-group input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")
        // select only first and last check box
        cy.get("div.form-group input.form-check-input[type='checkbox']").first().check().should("be.checked")
        cy.get("div.form-group input.form-check-input[type='checkbox']").last().check().should("be.checked")

    })

})