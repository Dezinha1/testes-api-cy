/// <reference types="cypress" />

context('funcionalidade de login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
        
    });
    
    afterEach(() => {

        
    });

    it('Deve faze login com sucesso', () => {
      
       cy.get('#username').type('aluno_ebac@teste.com') 
       cy.get('#password').type('teste@teste.com')
       cy.get('.woocommerce-form > .button').click()
       cy.get('.page-title').should('contain', 'Minha conta')
       cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
       



    });it('Deve apresentar mensagem de erro ao inserir senha inválida ', () => {
       
        cy.get('#username').type('aluno_ebac@teste.com') 
        cy.get('#password').type('teste@1teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    });it('Deve exibir uma mensagem de erro ao inserir e-mail inválido', () => {
        
        cy.get('#username').type('aluno_1ebac@teste.com') 
        cy.get('#password').type('teste@1teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
    

    
        
 
});