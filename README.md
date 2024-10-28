
<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" height="40" alt="mongodb logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="express logo"  />
</div>



# Projeto de API de Gerenciamento de Usuários com Express, Prisma e MongoDB

Este projeto é uma API REST desenvolvida em Node.js com Express, Prisma e MongoDB, projetada para realizar operações CRUD (criar, ler, atualizar e excluir) em registros de usuários.

Tecnologias Utilizadas: 
--
* Express: Framework para Node.js que facilita a criação de rotas e middlewares.

* Prisma: ORM (Mapeamento Objeto-Relacional) usado para interagir com o banco de dados de maneira eficiente e segura.

* MongoDB: Banco de dados NoSQL escolhido para armazenar informações dos usuários de forma escalável e flexível.

Funcionalidades:
--

* 1 Criação de Usuários: Endpoint POST /usuarios permite criar um novo usuário com nome, email e idade.

* 2 Leitura de Usuários: Endpoint GET /usuarios retorna uma lista de usuários cadastrados; permite filtros por nome, email e idade.

* 3 Atualização de Usuários: Endpoint PUT /usuarios/:id permite atualizar dados de um usuário específico pelo id.

* 4 Exclusão de Usuários: Endpoint DELETE /usuarios/:id remove um usuário específico.

Principais Vantagens:
--

* Integração Prisma-MongoDB: Utilização de Prisma como ORM facilita a gestão de dados em MongoDB, trazendo uma camada de segurança e automação.

* Estrutura Escalável: O uso do MongoDB garante flexibilidade no armazenamento, enquanto o Express facilita a extensão de funcionalidades e middlewares personalizados.

* Filtros Dinâmicos: A API permite realizar buscas com base em critérios específicos, como nome, email e idade.

Como Executar:
--

* Clone o repositório e instale as dependências.

* Configure o Prisma com o MongoDB.

* Inicie o servidor Express e utilize os endpoints para interagir com os dados de usuários.

Este projeto representa uma aplicação de backend com foco em boas práticas de desenvolvimento e escalabilidade, sendo ideal para quem busca um modelo de API RESTful utilizando MongoDB com Express e Prisma.




