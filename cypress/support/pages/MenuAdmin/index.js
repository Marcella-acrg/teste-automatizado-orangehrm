//Métodos de ações na página do MenuAdmin
const el = require('./elements').ELEMENTS
class MenuAdmin {
    perfilESS(){
    cy.get(el.menuAdmin).click()        
    cy.get(el.userrole).click()
    cy.contains(el.selecionarESS).click()
    cy.get(el.status).click()
    cy.contains(el.selecionarEnabled).click() 
    cy.get(el.buttonSearch).click({force: true})   
    cy.contains(el.registrosEncontrados)
    }

    excluirUsuarioESS(usuario) {
    cy.get(el.menuAdmin).click() 
    cy.get(el.excluirUsuarioESS).type(usuario) 
    cy.get(el.userrole).click()
    cy.contains(el.selecionarESS).click() 
    cy.get(el.status).click()
    cy.contains(el.selecionarEnabled).click() 
    cy.get(el.buttonSearch).click({force: true})
    cy.get(el.buttonLixeira).click()  
    //cy.get(el.buttonDelete).click() // Click para exclusão efetiva do usuário 

    }

    incluirUsuario(novousuario, novasenha){
    cy.get(el.menuAdmin).click()
    cy.get(el.buttonAdd).click({force: true})
    cy.get(el.userroleAdd).click()
    cy.contains(el.selecionarAdmin).click()
    cy.get(el.employeeName).type(usuarionovo) // Employee Name -> "Ivalid". Acredito ser um BUG, pois está como autocomplite, logo, não permitindo a inclusão de um novo empregado.
    cy.get(el.status).click()
    cy.contains(el.selecionarEnabled).click() 
    cy.get(el.novoUsuario).type(novousuario)
    cy.get(el.passwordNovoUsuario).type(novasenha)
    cy.get(el.confirmarPasswordNovoUsuario).type(novasenha)
    cy.get(el.buttonSave).click({force: true})
    }
 

    clicarNoMenuAdmin(){
        cy.get(el.menuAdmin).click()
    }

    clicarNoUserRole(){
        cy.get(el.userrole).click()
    }

    selecionarOpçãoESS(){
        cy.contains(el.selecionarESS).click()
    }

    clicarNoStatus(){
        cy.get(el.status).click()
    }

    selecionarOpçãoEnabled(){
        cy.contains(el.selecionarEnabled).click()
    }

    clicarNoButtonSearch(){
        cy.get(el.buttonSearch).click({force: true})
    }

    verificarQtdDePerfilAdmin(){
        cy.contains(el.registrosEncontrados)
    }

    pesquisarUsuarioESSParaExcluir(){
        cy.get(el.excluirUsuarioESS).type(usuario) 
    }

    clicarNoButtonLixeira(){
        cy.get(el.buttonLixeira).click() 
    }
    
    clicarnoButtonDelete(){
        cy.get(el.buttonDelete).click()
    }
    

}
export default new MenuAdmin()