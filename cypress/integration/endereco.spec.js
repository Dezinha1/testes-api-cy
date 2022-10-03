/// <reference types="cypress" />
import enderecoPage from '../support/page_objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco..json')



describe('Funcionalidade Endereços - Faturamento e Entrega - Customizados', () => {

  before( () => {
    cy.visit('minha-conta')
    cy.fixture('perfil').then(dados =>{
     cy.login(dados.usuario, dados.senha)
    
  })

});

    it('Deve fazer cadastro de faturameto com sucesso', () => {
      enderecoPage.editarEnderecoFaturamento('Debora','Penimpedo','Ebac','Brasil','Av Celso Garcia','5885','Praia Grande','Roraima','03063000','1155667788','deborapenimpedo@hotmail.com')
      cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')

    });

    it('Deve fazer cadastro de faturameto com sucesso - Usando Arquivos de Dados', () => {
      enderecoPage.editarEnderecoFaturamento(
        dadosEndereco[1].nome,
        dadosEndereco[1].sobrenome,
        dadosEndereco[1].empresa,
        dadosEndereco[1].pais,
        dadosEndereco[1].endereco,
        dadosEndereco[1].numero,
        dadosEndereco[1].cidade,
        dadosEndereco[1].estado,
        dadosEndereco[1].cep,
        dadosEndereco[1].telefone,
        dadosEndereco[1].email)
        cy.get('.woocommerce-message').should('contain' , 'Endereço alterado com sucesso.')

    });


    
});