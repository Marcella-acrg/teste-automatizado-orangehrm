/// <reference types="cypress" />
import Login from '../support/pages/Login'
import MenuAdmin from '../support/pages/MenuAdmin'

describe('Projeto - OrangeHRM', () => {
  beforeEach(() => {
    Login.logarUsuario('Admin', 'admin123')      

  })

  it('Menu Admin - Validar Quantidade de Usuários Ativos com Perfil ESS', () => {
    MenuAdmin.perfilESS()
  })

  it('Menu Admin - Excluir Usuário com Perfil ESS', () => {      
    MenuAdmin.excluirUsuarioESS('Alice.Duval')
    cy.wait(3000) // Aguarde 3 segundos
  
  })

  it('Menu Admin - Incluir Usuários', () => {  
    //MenuAdmin.incluirUsuario('Marcella.Araújo', 'Mins@it123')  //OBS: Fiz o método, contudo, o cypress está dando açguns erros que não consegui resolver. Para verificar, basta comentar todo o código abaixo e descomentar este.  
  
    cy.get('[href$=viewAdminModule]').click()
    cy.get('button[class$="--secondary"]').click({force: true})
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.contains('[role="option"]', 'Admin').click()
    cy.get('input[placeholder="Type for hints..."]').type('Marcella Araújo', 'delay: 500') // Employee Name -> "Ivalid". Acredito ser um BUG, pois está como autocomplite, logo, não permitindo a inclusão de um novo empregado (Marcella Araújo).
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.contains('[role="option"]', 'Enabled').click()
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Marcella.Araújo')
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Mins@it123')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Mins@it123')
    cy.get('button[class$="-left-space"]').click({force: true})
    
  }) 

})