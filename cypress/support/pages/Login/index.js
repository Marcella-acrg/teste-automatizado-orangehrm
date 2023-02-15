//Métodos de ações na página de Login
const el = require('./elements').ELEMENTS

class Login {
    logarUsuario(usuario, senha) {
        cy.visit(el.url)
        cy.get(el.username).type(usuario)
        cy.get(el.password).type(senha)
        cy.get(el.button).click()    

    }

    preencherUsername(username){
        cy.get(el.username).type(username)
    }

    preencherPassword(password){
        cy.get(el.password).type(password)
    }

    clicarNoButtonLogin(){
        cy.get(el.button).click()
    }

}
export default new Login()