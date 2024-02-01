/// <reference types="cypress" />

describe('Testes para as funcionalidades', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve adicionar um contato', () => {
    cy.get('[type="text"]').type('teste')
    cy.get('[type="email"]').type('teste@email.com')
    cy.get('[type="tel"]').type('11 12345678')
    cy.get('.adicionar').click()
    cy.wait(1000)
    cy.get('.cTVgex > li').should('contain', 'teste')
  })

  it('Deve alterar um contato', () => {
    cy.get('.cTVgex > li').should('have.length.greaterThan', 0)

    cy.get('.edit').first().click()

    cy.get('[type="text"]').type(' 2')
    cy.get('.alterar').click()
    cy.wait(1000)
    cy.get('.cTVgex > li').should('contain', 'teste 2')
  })

  it('Deve remover um contato', () => {
    cy.get('.cTVgex > li').should('have.length.greaterThan', 0)

    cy.get('.delete').first().click()

    cy.wait(1000)

    cy.get('.cTVgex > li').should('not.contain', 'teste 2')
  })
})