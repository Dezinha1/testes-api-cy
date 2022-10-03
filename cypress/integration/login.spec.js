/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')


context('Funcionalidade Login', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta')
    });


    it('Login com sucesso usando Comando customizado', () => {
        cy.login(dadosLogin.usuario, dadosLogin.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Login usando fixture', () => {

        cy.get('#username').type(perfil.usuario) 
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

    });

    it('Deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {

        cy.get('#username').type(dados.usuario) 
        cy.get('#password').type(dados.senha, {log: false})
        cy.get('.woocommerce-form > .button').click()
    })
        
    });

    it('Deve fazer login com sucesso - sem otimização', () => {
        cy.get('#username').type(dadosLogin.usuario)
        cy.get('#password').type(dadosLogin.senha, { log: false })
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })
})