const el = require('./elements').ELEMENTS;

class Cadastro {
    acessarPaginaDeCadastro() {
        cy.visit('http://localhost:4200/#/home');
        cy.get('[data-test="register"]').click();
    }

    preencherFormulario() {
        cy.get('[data-test="email"]').type('kjdfjkdf@sharklasers.com');
        cy.get('[data-test="fullName"]').type('Adamastor Nasté');
        cy.get('[data-test="registerUserName"]').type('naste');
        cy.get('[data-test="registerPassword"]').type('naste01@');
    }

    submeterCadastro() {
        cy.get('[data-test="btnRegister"]').click();
    }
}

export default new Cadastro();