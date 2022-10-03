/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/6/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.addProdutos('Lando Gym Jacket', 'XS' , 'Blue', '2' )
        
        cy.get('.woocommerce-message').should('contain','2 × “Lando Gym Jacket” foram adicionados no seu carrinho.')
         

        
    });

        

    

    });


