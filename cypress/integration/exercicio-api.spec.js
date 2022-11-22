/// <reference types="cypress" />
import contracts from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {
     let token
    before(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })
    });

    it('Deve validar contrato de usuários', () => {
     cy.request('usuarios').then(response => {
          return contracts.validateAsync(response.body)
      })

    });

    it('Deve listar usuários cadastrados', () => {
     cy.request({
          method: 'GET',
          url: 'usuarios'
      }).then((response) => {
          expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
          expect(response.status).to.equal(200)
          expect(response.body).to.have.property('usuarios')
          //expect(response.duration).to.be.lessThan(20)
      })

    });

    it.only('Deve cadastrar um usuário com sucesso', () => {
     let usuario = `Debora ${Math.floor(Math.random() * 1000000)}`
     cy.request({
          method: 'POST',
          url: 'usuarios',
          body: {
              "nome": "Debora Penimpedo",
              "email": "deborapenimpedo@hotmail.com",
              "passaword": "teste123",
              "administrador": "true"
          },
          headers: { authorization: token }
                   
      }).then((response) => {
          expect(response.status).to.equal(201)
          expect(response.body.message).to.equal('Cadastro realizado com sucesso')
      })
         
    });

    it('Deve validar um usuário com email inválido', () => {
         //TODO: 
    });

    it('Deve editar um usuário previamente cadastrado', () => {
         //TODO: 
    });

    it('Deve deletar um usuário previamente cadastrado', () => {
        //TODO: 
    });


});
