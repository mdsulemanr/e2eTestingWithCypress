//  test url: https://the-internet.herokuapp.com/iframe

import 'cypress-iframe'

describe('Handle iframe', () => {

    //Approach 1
    it('Approach1', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        let iframe = cy.get("#mce_0_ifr")
                    .its('0.contentDocument.body')
                    .should('be.visible')
                    .then(cy.wrap)
        iframe.clear().type("welcome {cmd+a}") // after clearing text, typing text, now select all
        cy.get('[aria-label="Bold"]').click()
        
})

    //Approach 2
    it.only('Approach2 - by using custome command', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe("#mce_0_ifr")
        .clear().type("welcome how r u {cmd+a}") // after clearing text, typing text, now select all
        cy.get('[aria-label="Bold"]').click()
        cy.get('[aria-label="Italic"]').click()
        cy.get('[aria-label="Align center"]').click()
        // cy.get("div[title='Clear formatting']").click()

})


    //Approach 3
    it('Approach3 - by using cypress-iframe plugin', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")
        
        cy.frameLoaded("#mce_0_ifr") // load the frame
        cy.iframe("#mce_0_ifr").clear().type("welcome to the iframe-plugin {cmd+a}")
        cy.get('[aria-label="Bold"]').click()
        cy.get('[aria-label="Italic"]').click()
        cy.get('[aria-label="Align center"]').click()

})


})