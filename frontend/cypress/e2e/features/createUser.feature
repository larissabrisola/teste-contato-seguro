Feature: Cadastro de usuário

    Background: Tela de cadastro
        Given que o usuário acessa a area de cadastro

    Scenario: Deve ser possivel criar usuário ao informar todos os dados corretamente
        When informar o nome
        When informar o email 
        When informar o telefone 
        When informar a cidade de nascimento
        When informar a data de nascimento
        When informar empresa 
        When clicar em Salvar 
        Then cadastro é realizado e o usuário é listado na tela inicial
        
    Scenario: Deve ser possivel criar usuário informando somente Nome, Email, Telefone, Data e Empresa
        When informar o nome
        When informar o email 
        When informar o telefone 
        When informar a data de nascimento
        When informar empresa 
        When clicar em Salvar 
        Then cadastro é realizado e o usuário é listado na tela inicial

    Scenario: Deve ser possivel criar usuário informando 2 empresas 
        When informar o nome
        When informar o email 
        When informar o telefone 
        When informar a cidade de nascimento
        When informar a data de nascimento
        When informar 2 empresas
        When clicar em Salvar 
        Then cadastro é realizado e o usuário é listado na tela inicial

    Scenario: Deve ser possivel criar usuário informando 3 empresas 
        When informar o nome
        When informar o email 
        When informar o telefone 
        When informar a cidade de nascimento
        When informar a data de nascimento
        When informar 3 empresas
        When clicar em Salvar 
        Then cadastro é realizado e o usuário é listado na tela inicial

    Scenario: Não deve ser possivel criar usuário sem informar nome
        When informar o email 
        When informar o telefone 
        When informar a cidade de nascimento
        When informar a data de nascimento
        When informar empresa 
        When clicar em Salvar 
        Then cadastro não é realizado

    Scenario: Não deve ser possivel criar usuário sem informar email
        When informar o nome 
        When informar o telefone 
        When informar a cidade de nascimento
        When informar a data de nascimento
        When informar empresa 
        When clicar em Salvar 
        Then cadastro não é realizado

    Scenario: Não deve ser possivel criar usuário sem informar telefone
        When informar o nome
        When informar o email 
        When informar a cidade de nascimento
        When informar a data de nascimento
        When informar empresa 
        When clicar em Salvar 
        Then cadastro não é realizado

    Scenario: Não deve ser possivel criar usuário sem informar data de nascimento 
        When informar o nome
        When informar o email 
        When informar o telefone 
        When informar a cidade de nascimento
        When informar empresa 
        When clicar em Salvar 
        Then cadastro não é realizado

    Scenario: Não deve ser possivel criar usuário sem informar empresa
        When informar o nome
        When informar o email 
        When informar o telefone 
        When informar a cidade de nascimento
        When informar a data de nascimento
        When clicar em Salvar 
        Then cadastro não é realizado e um aviso é exibido



