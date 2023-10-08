describe('Realizar o login', () => {

  beforeEach(() => {
  cy.visit('http://localhost:4200/#/home')

})

  it('Realizar o preenchimento dos campos corretamente e realizar o login com sucesso', () => {
    cy.login('rogeriolins', 'Rogerio123@');
  })
})