# Gestor de Estoque API

Esta é uma API simples desenvolvida em Node.js utilizando o framework Express e o banco de dados SQLite. A API permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) sobre um catálogo de produtos, com informações como nome, preço, estoque e descrição.

## Funcionalidades

- **GET /produtos**: Retorna todos os produtos cadastrados no banco de dados.
- **POST /produtos**: Adiciona um novo produto ao banco de dados.
- **PUT /produtos/:id**: Atualiza as informações de um produto existente pelo seu ID.
- **DELETE /produtos/:id**: Exclui um produto do banco de dados utilizando seu ID.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express**: Framework minimalista para construção de APIs em Node.js.
- **SQLite**: Banco de dados leve e simples, utilizado para armazenar as informações dos produtos.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/christopherfc/Gestor-de-Estoque-Backend.git
2. Navegue até o diretório do projeto
   ```bash
   cd Gestor-de-Estoque-Backend
3. Instale as dependências:
   ```bash
   npm install
4. Inicie o servidor:
   ```bash
   node server.js
   
O servidor estará disponível em http://localhost:3001

## Endpoints
## GET /produtos
- Retorna todos os produtos cadastrados.
### Resposta:

```json
[
  {
    "id": 1,
    "nome": "Produto 1",
    "preco": 100.0,
    "estoque": 50,
    "descricao": "Descrição do produto 1"
  },
  {
    "id": 2,
    "nome": "Produto 2",
    "preco": 150.0,
    "estoque": 30,
    "descricao": "Descrição do produto 2"
  }
]
```

## POST /produtos
- Adiciona um novo produto.
### Exemplo de corpo da requisição:
```json
{
  "nome": "Novo Produto",
  "preco": 200.0,
  "estoque": 10,
  "descricao": "Descrição do novo produto"
}
```
### Resposta:

```json
{
  "id": 3
}
```
### PUT /produtos/:id
- Atualiza um produto existente.
### Exemplo de corpo da requisição:

```json
{
  "nome": "Produto Atualizado",
  "preco": 120.0,
  "estoque": 40,
  "descricao": "Descrição atualizada do produto"
}
```
### Resposta:
```json
{
  "message": "Produto atualizado com sucesso!"
}
```
### DELETE /produtos/:id
- Exclui um produto pelo seu ID.
### Resposta:

```json
{
  "message": "Produto excluído com sucesso!"
}
```
## Contribuição
Se você deseja contribuir para este projeto, siga as etapas:

1. Faça um fork deste repositório.
2. Crie uma branch para sua modificação.
3. Realize suas alterações e envie um pull request.