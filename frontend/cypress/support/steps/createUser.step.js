import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateUserPage from "../pages/createUser.page";
let pageCreateUser = new CreateUserPage()
import HomePage from "../pages/home.page";
let pageHome = new HomePage()
import { faker } from "@faker-js/faker";

let userValid = {
    name: faker.person.firstName(), 
    email: faker.internet.exampleEmail(),
    phone: faker.phone.number(),
    city: faker.location.city(),
    date: "1999-05-01"
}

Given('que o usuário acessa a area de cadastro', ()=>{
    cy.visit('http://localhost:5400/')
    pageHome.clickBtnNewUser()
    cy.contains('Cadastrar novo usuário')
})

When('informar o nome', ()=>{
    pageCreateUser.typeName(userValid.name)
})

When('informar o email', ()=>{
    pageCreateUser.typeEmail(userValid.email)
})

When('informar o telefone', ()=>{
    pageCreateUser.typeTelefone(userValid.phone)
})

When('informar a cidade de nascimento', ()=>{
    pageCreateUser.typeCidade(userValid.city)
})

When('informar a data de nascimento', ()=>{
    pageCreateUser.typeData(userValid.date)
})

When('informar empresa', ()=>{
    pageCreateUser.clickInputEmpresas()
    pageCreateUser.clickEmpresa1()
})

When('informar 2 empresas', ()=>{
    pageCreateUser.clickInputEmpresas()
    pageCreateUser.clickEmpresa1()
    pageCreateUser.clickEmpresa2()
})

When('informar 3 empresas', ()=>{
    pageCreateUser.clickInputEmpresas()
    pageCreateUser.clickEmpresa1()
    pageCreateUser.clickEmpresa2()
    pageCreateUser.clickEmpresa3()

})

When('clicar em Salvar', ()=>{
    pageCreateUser.clickBtnSalvar()
})

Then('cadastro é realizado e o usuário é listado na tela inicial', ()=>{
    cy.get('#root > main > div > table > tbody > tr').should('contain.text', userValid.name).and('be.visible')
    cy.get('#root > main > div > table > tbody > tr').should('contain.text', userValid.email).and('be.visible')
    cy.get('#root > main > div > table > tbody > tr').should('contain.text', userValid.phone).and('be.visible')
})

Then('cadastro não é realizado', ()=>{
    cy.contains('Cadastrar novo usuário').should('be.visible')
})

Then('cadastro não é realizado e um aviso é exibido', ()=>{
    cy.contains('Insira as empresas do usuário!').should('be.visible')
})