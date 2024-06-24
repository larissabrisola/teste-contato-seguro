import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/home.page";
let pageHome = new HomePage()

Given('que o usuário está na tela inicial', ()=>{
    cy.visit('http://localhost:5400/')
})

Given('que o usuário está na tela inicial e existe usuários cadastrados', ()=>{
    cy.newUser()

    cy.visit('http://localhost:5400/')

})
When('clicar em Salvar', ()=>{
    pageHome.clickBtnNewUser()
})

When('existir usuário', ()=>{
    cy.newUserToDelete()
    cy.visit('http://localhost:5400/')

})

When('existir usuários cadastrados', ()=>{
    cy.newUser()
})


When('clicar em Deletar', ()=>{
    pageHome.clickBtnDeletar()
    cy.get('.swal2-confirm').click()
})
Then('a tela de cadastro é exibida', ()=>{
    cy.contains('Cadastrar novo usuário').should('be.visible')
})



Then('é possivel visualizar as informações do usuário', ()=>{
    cy.get('#root > main > div > table > tbody > tr').should('contain.text', "Julia").and('be.visible')
    cy.get('#root > main > div > table > tbody > tr').should('contain.text', "julia@mo.com").and('be.visible')
    cy.get('#root > main > div > table > tbody > tr').should('contain.text', "15992939192").and('be.visible')
    cy.get('#root > main > div > table > tbody > tr').should('contain.text', "Campinas").and('be.visible')
})




Then('o usuário deverá ser deletado', ()=>{
    cy.get('.swal2-popup').should('contain.text', 'Usuário deletado com sucesso!').and('be.visible')
    cy.get('#root > main > div > table > tbody > tr').should('not.contain.text', "fairpwllgwopoooiii")
})

