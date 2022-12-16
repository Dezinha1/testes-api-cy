/// <reference types="cypress" />
import contracts from '../contracts/usuarios.contract'

describe('Testes da Funcionalidade Usuários', () => {
    
    

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
     let usuario = `Usuario Ebac ${Math.floor(Math.random() * 1000000)}`
     let email = `testeebac@gmai.com ${Math.floor(Math.random() * 1000000)}`
     let senha = `teste123 ${Math.floor(Math.random() * 1000000)}`
     
     cy.cadastrarUsuario(usuario, email, senha, true)
          
         .then((response) => {
          expect(response.status).to.equal(201)
          expect(response.body.message).to.equal('Cadastro realizado com sucesso')
      })
         
    });

    it('Deve validar um usuário com email inválido', () => {
        let usuario = `Debora ${Math.floor(Math.random() * 1000000)}`
        cy.request({
             method: 'POST',
             url: 'usuarios',
             body: {
                 "nome": "Debora Penimpedo",
                 "email": "deborapenimpedohotmail.com",
                 "password": "teste123",
                 "administrador": "true"
             },
             failOnStatusCode: false        
         }).then((response) => {
             expect(response.status).to.equal(400)
             expect(response.body.message).to.equal('email deve ser um email válido')
         })
            
    });

    it('Deve editar um usuário previamente cadastrado', () => {
        let usuario = `Debora ${Math.floor(Math.random() * 1000000)}`
        cy.cadastrarUsuario (usuario, email, senha, adm) 
    });

    it('Deve deletar um usuário previamente cadastrado', () => {
        //TODO: 
    });


});
