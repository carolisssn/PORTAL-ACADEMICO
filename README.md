# portal-academico


### Dependências do sistema de login

npm i passport passport-local express-session bcrypt

Passport
Passport é autenticação middleware para Node. Ele foi projetado para servir a um propósito singular: autenticar pedidos
O passport reconhece que cada aplicativo tem requisitos exclusivos de autenticação. Os mecanismos de autenticação são conhecidos como "estratégias".

# passport-local
Uma das estratégias do passport, utilizada para autenticação com nome de usuário e senha.

### Dependencias 

npm i passport passport-local express-session bcryptjs

passport 
(http://www.passportjs.org/docs/downloads/html/)

Passport é autenticação middleware para Node. Ele foi projetado para servir a um propósito singular:
autenticar pedidos. Ao escrever módulos, o encapsulamento é uma vitrude, então o passport delega todas as outras funcionalidades para o aplicativo.

O passport reconhece que cada aplicativo tem requisitos exclusivos de autenticação. Os mecanismos de 
autenticação são conhecidos como "estratégias"

passport-local
(http://www.passportjs.org/packages/passport-local)

Estratégia de passport para autenticação com nome de usuário e senha.

express-session

Quando o cliente faz uma solicitação de login no servidor, o servidor criará uma sessão e armazenará 
no lado do servidor. Quando o servidor responde ao cliente, ele envia um cookie.

