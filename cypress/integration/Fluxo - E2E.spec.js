/// <reference types="cypress" />
const perfil = require('../fixtures/perfil.json')





context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('minha-conta')
       
        
        
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        //login - usando comando fixtures

        cy.get('#username').type(perfil.usuario) 
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        
        // adicionar 1º produto - usando comando customizado
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/6/')
        

        cy.addProdutos('Lando Gym Jacket', 'XS' , 'Blue', 1 )
        cy.get('.woocommerce-message').should('contain','“Lando Gym Jacket” foi adicionado no seu carrinho.')


        // adicionar 2º produto - usando comando customizado
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/4/')

        cy.addProdutos('Eos V-Neck Hoodie', 'XS' , 'Green', 1 )
        cy.get('.woocommerce-message').should('contain','“Eos V-Neck Hoodie” foi adicionado no seu carrinho.')
        
        //adicionar 3º produto - usando comando customizado
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/4/')

        cy.addProdutos('Erica Evercool Sports Bra', 'XS' , 'Blue', 1 )
        cy.get('.woocommerce-message').should('contain','“Erica Evercool Sports Bra” foi adicionado no seu carrinho.')

        //adicionar 4º produto- usando comando customizado
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/5/')

        cy.addProdutos('Hera Pullover Hoodie', 'XL' , 'Orange', 1 )
        cy.get('.woocommerce-message').should('contain','“Hera Pullover Hoodie” foi adicionado no seu carrinho.')

        //finalizar compra
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('#terms').click()
        cy.get('#place_order').click( { force:true } )
       
        cy.get('.woocommerce-notice').should('contain' , 'Obrigado. Seu pedido foi recebido.')

       


    


        




        
        





    
        

         

        
    });

        

    

    });


