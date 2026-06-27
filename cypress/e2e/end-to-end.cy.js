 /// <reference types="cypress"/>
    import { faker } from '@faker-js/faker';


describe('Testes End To End do fluxo de cadastro e login', () => {

    /* 
    Testes End To End ou Testes de ponta a ponta, ligam uma série de funcionalidades de um sistema,
    simulando o comportamento do usuário final. Esses testes verificam se diferentes partes do sistema
    funcionam corretamente quando integradas, garantindo que o fluxo completo de uma funcionalidade
    funcione como esperado.
    Aqui iremos criar um teste end to end que cobre o fluxo de cadastro e login de um usuário em um sistema web.
    Em apenas um teste, ou seja, em um único "it", iremos:
    1. Acessar a página de cadastro.
    2. Preencher o formulário de cadastro com dados válidos.
    3. Submeter o formulário e verificar se o cadastro foi bem-sucedido.
    4. Acessar a página de login.
    5. Preencher o formulário de login com as credenciais do usuário recém-cadastrado.
    6. Submeter o formulário de login e verificar se o login foi bem-sucedido.

    Use as boas práticas aprendidas até agora para estruturar o teste.
    */
   
    


    it('Deve cadastrar um novo usuário e logo em seguida logar no mesmo', () => {
        const nome = faker.person.fullName()
        const email = `vitor${Date.now()}@teste.com`
        const telefone = '11977578832'
        const senha = '56253012'

        cy.cadastrarUsuario(nome, email, telefone, senha)

        // Resultado esperado após o cadastro
        cy.url().should('include', 'dashboard')

        cy.get('.user-actions > .btn-outline-danger > .fas').click()

        cy.login(email, senha)

        // Resultado esperado após o login
        cy.url().should('include', 'dashboard')
    })

})