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

## Back end
Pré-requisitos: Node.js, Docker e Docker Compose

```bash
# clonar repositório
git clone https://github.com/YannFigueiredo/distribuidora-spider.git

# entrar na pasta do projeto back end
cd backend

# instalar dependências
npm i

# criar e iniciar o banco de dados com docker-compose
docker-compose up

# criar e inciar banco de dados locamente (alternativa ao docker-compose)
# criar um banco MySQL chamado "spider_db" e preencher as informações no arquivo .env

# executar o projeto
npm run start
```
# Autor

Yann Fabricio Cardoso de Figueiredo

https://www.linkedin.com/in/yannfigueiredo/
