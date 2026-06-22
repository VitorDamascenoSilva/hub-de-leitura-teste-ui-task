// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';

Cypress.Commands.add('CadastroeLogin', () => { 
    let email = `vitor${Date.now()}@teste.com`
    let nome = faker.person.fullName()
    cy.visit('register.html')
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('11977578832')
        cy.get('#password').type('56253012')
        cy.get('#confirm-password').type('56253012')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
        cy.get('.user-actions > .btn-outline-danger > .fas').click()
        cy.get('#email').type(email)
        cy.get('#password').type('56253012')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')

 })

