<!-- # :construction: README customizado em construção ! :construction: -->

# Projeto Delivery App

## Objetivo do Projeto

O projeto Delivery App foi desenvolvido visando otimizar a produtividade de gestão e entregas de uma distribuidora de bebidas, no qual foi criada uma plataforma de delivery de cerveja, contando com integração entre back-end, banco de dados e front-end.  
Essa aplicação foi desenvolvida pelos seguintes integrantes do grupo: _**[Sheifer Kepler](https://github.com/SH-Kepler),
[Jessy Cristina](https://github.com/Jessy-G4),
[Valéria Menezes](https://github.com/ValeriaMenezes),
[Mael Fernandes](https://github.com/Malrus-dev),
[Henrique Rocha](https://github.com/rocha-henrique)
e [Matheus Bora](https://www.linkedin.com/in/matheus-bora-603690268/)**_

## Tecnologias

>[![JavaScript][JavaScript]][JavaScript-url]
[![REACT][REACT]][REACT-url]
[![RTL][RTL]][RTL-url]
[![Node.js][Node.js]][Node.js-url]
[![EXPRESS][EXPRESS]][EXPRESS-url]
[![MySQL][MySQL]][MySQL-url]
[![Sequelize][Sequelize]][Sequelize-url]
[![JWT][JWT]][JWT-url]
[![Mocha][Mocha]][Mocha-url]
[![Chai][Chai]][Chai-url]
[![Docker][Docker]][Docker-url]

[JavaScript]: https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=node.js&logoColor=black
[JavaScript-url]: https://www.javascript.com

[REACT]: https://img.shields.io/badge/-React.js-20232A?style=for-the-badge&logo=react
[REACT-url]: https://legacy.reactjs.org/docs/getting-started.html

[RTL]: https://img.shields.io/badge/Testing%20library-E33332?style=for-the-badge&logo=testing-library&logoColor=white
[RTL-url]: https://testing-library.com/docs/react-testing-library/intro/

[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/

[EXPRESS]: https://img.shields.io/badge/Express-FFFFFF?style=for-the-badge&logo=express&logoColor=black
[EXPRESS-url]: https://expressjs.com

[MySQL]: https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://dev.mysql.com/doc/

[Sequelize]: https://img.shields.io/badge/Sequelize-06AFEF?style=for-the-badge&logo=sequelize&logoColor=white
[Sequelize-url]: https://sequelize.org

[JWT]: https://img.shields.io/badge/jwt-000000?style=for-the-badge&logo=jwt&logoColor=white
[JWT-url]: https://jwt.org

[Mocha]: https://img.shields.io/badge/MOCHA-6D4A31?style=for-the-badge&logo=mocha&logoColor=white
[Mocha-url]: https://mochajs.org

[Chai]: https://img.shields.io/badge/chai-974942?style=for-the-badge&logo=chai&logoColor=white
[Chai-url]: https://www.chaijs.com

[Docker]: https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/

## Como Rodar

1. Clone o repositório, para isso use o comando: `git clone git@github.com:ValeriaMenezes/delivery-app.git`
2. Entre na pasta `delivery-app` do repositório que você acabou de clonar
3. Rode o comando `docker-compose up -d` que será responsável por criar a conexão com o banco de dados
4. Instale as dependências com o comando `npm install` no diretório raíz
5. No diretório raíz, rode o comando `npm run dev:prestart` que é responsável por fazer o processo de instalação de dependências (`npm install`) nos dois projetos (./front-end e ./back-end) e roda o Sequelize no ./back-end
6. Em `delivery-app/back-end` rode o comando `npm run dev` que é responsável por iniciar o servidor
7. Em `delivery-app/front-end` rode o comando `npm run start` que é responsável por subir a aplicação em uma aba no navegador
8. Caso precise restaurar o banco de dados, você pode optar por usar os comandos `npm run db:reset`, `npm run db:reset:debug` ou `npm start` na raíz do diretório

## Contatos

>[![LinkedIn][LinkedIn]][LinkedIn-url]
[![Gmail][Gmail]][Gmail-url]

[LinkedIn]: https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white
[LinkedIn-url]: https://www.linkedin.com/in/valeria-menezes-dev-web-full-stack/

[Gmail]: https://img.shields.io/badge/gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white
[Gmail-url]: mailto:valeriamenezes022@gmail.com
