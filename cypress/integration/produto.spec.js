/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/6/')
    });

    it('Deve selecionar um produto da lista', () => {
       cy.get('.product-block')
        .eq(5).click()
        
    });

    it('Deve selecionar um produto no carrinho', () => {
        cy.get('.product-block')
        .contains('Lando Gym Jacket').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , 1)
        cy.get('.woocommerce-message').should('contain','“Lando Gym Jacket” foi adicionado no seu carrinho.')
         
          
    });

    it('Deve adicionar produtos no carrinho - Usando comando customizados', () => {
       
        cy.addProdutos('Lando Gym Jacket', 'XS' , 'Blue', 2 )
        
    });

    
});