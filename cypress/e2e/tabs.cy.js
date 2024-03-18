//  test url: https://the-internet.herokuapp.com/windows

describe('Handle tab', () => {

    //Approach 1
    it('Approach1', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("div.example > a[href='/windows/new']").invoke('removeAttr', 'target').click() // remove the target attribute in order to open in the same window
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') // verify the child window
        cy.wait(5000)

        // operations
        cy.go('back') // go back to parent tab
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows') // verify the parent window
        

    })

        //Approach 2
        it.only('Approach2', ()=>{
            cy.visit("https://the-internet.herokuapp.com/windows")
            cy.get("div.example > a[href='/windows/new']").then((e)=>{
                let url = e.prop('href')
                cy.visit(url)
            })
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') // verify the child window
            cy.wait(5000)
    
            // operations
            cy.go('back') // go back to parent tab
            cy.url().should('include', 'https://the-internet.herokuapp.com/windows') // verify the parent window
        
        })
    

})

