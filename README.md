🚀 Projeto Full-Stack: Sistema de Cadastro de Produtos

FinalizeI um projeto full-stack focado em um sistema completo de cadastro de produtos, onde cada usuário pode criar sua conta, fazer login e gerenciar seus próprios registros.

🧩 Sobre o Projeto

O sistema permite:

Cadastro de usuários

Login com autenticação segura

Cadastro de produtos por usuário

Editar produtos

Excluir produtos

Listar produtos cadastrados

Cada usuário só tem acesso aos seus próprios dados, garantindo privacidade e segurança.

🛠️ API RESTful criada do zero

Toda a API foi desenvolvida no modelo RESTful, seguindo boas práticas:

Rotas organizadas por responsabilidade

Middlewares para autenticação

Respostas padronizadas

Separação clara entre controllers, services e validações

🔐 Autenticação

Implementei:

JWT para gerar e validar tokens

bcrypt para criar hash de senha no cadastro

Comparação de hash no login para validar credenciais

⚠️ Dificuldade enfrentada

Um dos maiores desafios foi implementar corretamente a autenticação do usuário, especialmente na parte de:

validar o token em rotas protegidas

garantir que cada usuário acessasse somente os próprios produtos

tratar erros de autenticação e expiração de token

Depois de alguns testes, ajustes no middleware e correções de fluxo, tudo ficou funcionando como esperado.

🎨 Tecnologias utilizadas
Front-end

React • TailwindCSS • Axios • React Router DOM

Back-end

Express • JWT • JsonWebToken • bcrypt • Prisma • CORS
Banco de dados: MongoDB

Deploy

Front-end: Vercel

Back-end: Railway

🔗  Link do Projeto: https://cadastro-de-produtos-sable.vercel.app/login
