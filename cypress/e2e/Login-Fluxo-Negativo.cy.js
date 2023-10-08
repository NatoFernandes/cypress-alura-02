describe('Realizar o login e validar mensagens de preenchimento obrigatório nos campos', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home')

    cy.intercept('POST', 'http://localhost:3000/user/login', {
      statusCode: 400
    }).as('stubPost')
  })

  it('Não realizar o preenchimento dos campos e validar a mensagem nos campos de preenchimento obrigatório', () => {
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  })

  it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
    cy.login('rogeriolins', 'Rogerio123@');
    cy.wait('@stubPost')
  })

})