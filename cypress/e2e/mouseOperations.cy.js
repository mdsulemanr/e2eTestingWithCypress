import 'cypress-iframe'
import '@4tw/cypress-drag-drop'

//  test url: https://demo.opencart.com/index.php?route=common/home&language=en-gb
describe('Mouse Operations', () => {

    //Mouse HOver action
    it.only('Mouse Hover', ()=>{
        cy.visit("https://demo.opencart.com/index.php?route=common/home&language=en-gb")
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('not.be.visible')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click() // over over option
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
        .should('be.visible').click()
})


    //Mouse right-click action - Approach 1
    // url: https://swisnl.github.io/jQuery-contextMenu/demo.html
    it('Mouse right-click only', ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        //right click contextmenu
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-edit").should('be.visible')
})


    //Mouse right-click action - Approach 2
    // url: https://swisnl.github.io/jQuery-contextMenu/demo.html
    it('Mouse right-click only', ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        //right click 
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-edit").should('be.visible')
})

    //Mouse double-click action
    // url: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3
    it('Mouse double-click', ()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("iframeResult") // load the frame
        
        //Approach - 1 (dblclick)         cy.iframe("iframeResult").find("button[ondblclick='myFunction()']").trigger('dbclick')
        cy.iframe("iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        // different methods like, contains, should have.text, should have.value
        cy.iframe("iframeResult").find("#field2").should('have.value', "Hello World!")

})

    //Drag and drop
    // url: http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html
    it('Drag and drop', ()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        
        cy.get("#box6").should("be.visible")
        cy.get("#box106").should("be.visible")
        // cy.wait(3000)
        cy.get("#box6").drag("#box106", {force:true})

})

    //Scroll the page
    // url: https://www.countries-ofthe-world.com/flags-of-the-world.html
    it('Scroll the page', ()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html")

        // Pakistan flag
        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(2) > tbody > :nth-child(35) > :nth-child(1) > img').should('be.visible')
        
        // Afghanistan flag
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').scrollIntoView({duration:1000})
        cy.get(':nth-child(1) > tbody > :nth-child(2) > :nth-child(1) > img').should('be.visible')

        // go to footer
        cy.get('#footer').scrollIntoView({duration:6000})
        cy.get('#footer').should('be.visible')


})

})