describe('Realizar o login', () => {
    it('Realizar o preenchimento dos campos corretamente e realizar o login com sucesso', () => {
      cy.visit('http://localhost:4200/#/home');
      cy.get('[data-test="loginUserName"]').type('rogeriolins');
      cy.get('[data-test="loginPassword"]').type('Rogerio123@');
      cy.contains('button', 'login').click();
      cy.contains('a', 'Logout').should('be.visible');
      cy.contains('a', 'Logout').click();
      cy.contains('Please, login!').should('be.visible');
    })
  })