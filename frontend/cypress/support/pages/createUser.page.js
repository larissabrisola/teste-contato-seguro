export default class CreateUserPage {

    inputName = 'input[placeholder="Nome"]'
    inputEmail = 'input[placeholder="Email"]'
    inputTelefone = 'input[placeholder="Telefone"]'
    inputCidade = 'input[placeholder="Cidade de nascimento"]'
    inputData = 'input[placeholder="Data de nascimento"]'
    inputEmpresas = 'input[placeholder="Empresas"]'
    liEmpresa1 = 'ul > li.option.highlightOption.highlight'
    liEmpresa2 = 'ul > li:nth-child(2)'
    liEmpresa3 = 'ul > li:nth-child(3)'
    btnSalvar = 'button type="submit"'

    typeName(name){
        cy.get(this.inputName).type(name)
    }

    typeEmail(email){
        cy.get(this.inputEmail).type(email)
    }

    typeTelefone(telefone){
        cy.get(this.inputTelefone).type(telefone)
    }

    typeCidade(cidade){
        cy.get(this.inputCidade).type(cidade)
    }

    typeData(data){
        cy.get(this.inputData).type(data)
    }

    typeEmpresas(empresas){
        cy.get(this.inputEmpresas).type(empresas)
    }
    
    clickInputEmpresas(){
        cy.get(this.inputEmpresas).click()
    }

    clickBtnSalvar(){
        cy.get(this.btnSalvar).click()
    }

    clickEmpresa1(){
        cy.get(this.liEmpresa1).click()
    }

    clickEmpresa2(){
        cy.get(this.liEmpresa2).click()
    }

    clickEmpresa3(){
        cy.get(this.liEmpresa3).click()
    }


}