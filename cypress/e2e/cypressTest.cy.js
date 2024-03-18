describe('Test home page', () => {
  it('Visit the page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
  })
})