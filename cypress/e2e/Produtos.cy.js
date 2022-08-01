/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/page/2/')
    });

    it('Deve selecionar um produto da lista', () => {
       cy.get('.product-block')
        .eq(5).click()
        
    });

    it('Deve selecionar um produto no carrinho', () => {
        cy.get('.product-block')
        .contains('Aether Gym Pant').click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Brown').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , 1)
        cy.get('.woocommerce-message').should('contain','“Aether Gym Pant” foi adicionado no seu carrinho.')
         
          

        
    });

    

    
});
