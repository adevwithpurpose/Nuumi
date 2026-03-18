describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('successfully loads the homepage', () => {
    cy.get('main#MainContent').should('exist')
  })

  it('displays the header', () => {
    cy.get('header').should('exist')
  })

  it('displays the footer', () => {
    cy.get('footer').should('exist')
  })
})
