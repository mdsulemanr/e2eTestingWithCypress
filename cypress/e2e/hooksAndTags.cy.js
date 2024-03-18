/*  test url: https://demo.opencart.com/index.php?route=common/home&language=en-gb
before: before starting describe block, this hook will be executed once
after: after executing all it blocks, this hook will be executed once
beforeEach: this hook will be executed multiple times BEFORE every it block, e.g. login
afterEach: this hook will be executed multiple times AFTER every it block, e.g. logout
*/

describe('My Test Suit', () => {

    before(()=>{
        cy.log("***** Launching App ******")
    })


    after(()=>{
        cy.log("***** closing the app ******")
    })


    beforeEach(()=>{
        cy.log("******* Login ******")
    })


    afterEach(()=>{
        cy.log("***** logout *****")
    })

    it('search', ()=>{
        cy.log("****** searching ******")

    })

    it.skip('advanced search', ()=>{
        cy.log("****** advanced search ******")

    })

    it('listening products', ()=>{
        cy.log("****** listening products ******")

    })


})