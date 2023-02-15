/// <reference types="cypress" />
import Login from '../support/pages/Login'

describe('Projeto - OrangeHRM', () => {
  it('Preencher login - Usuário inválido', () => { 
    Login.logarUsuario('Marcella', 'admin123')
    cy.contains('p', 'Invalid credentials').should('be.visible')
    cy.wait(2000) // Aguarde 2 segundos    
  })

  it('Preencher login - Usuário válido', () => { 
    Login.logarUsuario('Admin', 'admin123')     
  })
})