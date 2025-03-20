Feature: Registro de Usuário

Scenario: Registro bem-sucedido
  Given que o usuário preencheu todos os campos obrigatórios corretamente
  When o usuário submete o formulário de registro
  Then o usuário deve ver uma mensagem de sucesso

Scenario: Falha no registro por e-mail inválido
  Given que o usuário preencheu todos os campos, exceto o e-mail corretamente
  When o usuário submete o formulário de registro
  Then o usuário deve ver uma mensagem de erro indicando e-mail inválido
