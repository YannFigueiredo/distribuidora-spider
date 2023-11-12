# Distribuidora Spider

# Sobre o projeto

https://distribuidora-spider-api.onrender.com/api-docs

Sistema de gerenciamento de estoque da distribuidora Spider, empresa fictícia especializada em distribuir, por meio de venda, produtos de fornecedoras para comerciantes diversos.

## Modelo conceitual
<img src="https://imgur.com/qDosZRd.png" alt="Modelo conceitual" title="Modelo conceitual"/>

# Tecnologias utilizadas
## Back end

- Node.js
- Express
- JavaScript
- Sequelize
- Nodemon
- Yup
- Jest
- MySQL

## Implantação em produção
- Back end: Render
- Banco de dados: MySQL 

# Como executar o projeto

## Backend local
Pré-requisitos: Node.js, Docker e Docker Compose

```bash
# clonar repositório
git clone https://github.com/YannFigueiredo/distribuidora-spider.git

# entrar na pasta do projeto back end
cd backend

# instalar dependências
npm i

# criar e iniciar o banco de dados com docker-compose
# criar um arquivo .env preenchendo as informações como em .env.example, iniciar o docker e depois executar o comando abaixo
docker-compose up

# criar e inciar banco de dados localmente (alternativa ao docker-compose)
# criar um banco MySQL chamado "spiderdb" e preencher as informações em um arquivo .env segundo .env.example

# executar o projeto
npm run start
```
## Backend em produção
<a href="https://distribuidora-spider-api.onrender.com/api-docs">Clique aqui</a>

# Autor

Yann Fabricio Cardoso de Figueiredo

https://www.linkedin.com/in/yannfigueiredo/
