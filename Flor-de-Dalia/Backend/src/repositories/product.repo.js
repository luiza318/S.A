const db = require("../config/db");

async function list() {
    const [rows] = await db.query(
        "SELECT * FROM products",
    );
    return rows;
}

async function findById(product_id) {
    const [rows] = await db.query(
        "SELECT * FROM products WHERE product_id = ?",
        [product_id]
    );
    return rows [0];  // retorna só um produto
}

async function listBycategory(category_id) {
    const [rows] = await db.query(
        "SELECT *FROM products WHERE category_id = ?"
        [category_id]
    );
    return rows [];
}

module.exports = { list, findById };

// feat: estrutura inicial do backend com autenticação e produtos

//- Implementado sistema de autenticação (register/login) com JWT
//- Middleware de autenticação funcionando (Bearer Token)
//- Rota protegida /users/me funcionando corretamente
//- Senhas criptografadas com bcrypt
//- Estrutura MVC organizada (routes, controllers, repositories, middlewares)
//- Banco de dados configurado com tabela de usuários

//- Criação da base de produtos:
//  - Tabela products criada
//  - Tabela categories criada com categorias iniciais
//  - Relacionamento entre products e categories (FK)

//- Início do repository de produtos:
//  - Função list (listar todos produtos)
//  - Função findById (buscar produto por id)
 // - Estrutura preparada para listagem por categoria

// next steps:
// - Finalizar repository de produtos (corrigir erros e adicionar listByCategory)
// - Criar controller de produtos
// - Criar rotas de produtos
// - Testar endpoints no Insomnia/ApiDog