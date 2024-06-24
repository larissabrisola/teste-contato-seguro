Feature: Tela inicial 

    Scenario: Deve ser possivel acessar o cadastro de usuário 
        Given que o usuário está na tela inicial
        When clicar em Salvar
        Then a tela de cadastro é exibida

    Scenario: Deve ser possivel visualizar todas informações dos usuários cadastrados
        Given que o usuário está na tela inicial e existe usuários cadastrados
        Then é possivel visualizar as informações do usuário
    
    Scenario: Deve ser possivel deletar usuário 
        Given existir usuário
        When clicar em Deletar 
        Then o usuário deverá ser deletado 

    # Scenario: Deve ser possivel acessar a edição de informações do usuário  
         # Não é possivel criar um teste pois não existe informação do que a tela a seguir deveria conter 