import Cadastro from '../support/pages/cadastro/pagina-cadastro'

describe('Realizar o cadastro', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200/#/home');
  })

  //Este trecho comentado é para aproveitar os dados para cadastro no arquivo usuarios.json na pasta Fixtures
  // const usuarios = require('../fixtures/usuarios.json')
  // usuarios.forEach(usuario => {
    it.only('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

      // cy.contains('[data-test="register"]').click();
      // cy.get('[data-test="email"]').type(usuario.email);
      // cy.get('[data-test="fullName"]').type(usuario.fullName);
      // cy.get('[data-test="registerUserName"]').type(usuario.userName);
      // cy.get('[data-test="registerPassword"]').type(usuario.password);
      // cy.contains('[data-test="btnRegister"]').click();

      Cadastro.acessarPaginaDeCadastro();
      Cadastro.preencherFormulario();
      Cadastro.submeterCadastro();

    })
  })
// })