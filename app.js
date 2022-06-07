import express from "express";
import { randomUUID } from "crypto";

const app = express();

const products = [];

// middleware para o express entender os body em JSON
app.use(express.json());

app.post("/products", (req, res) => {
    // nome - preço => name - price
    // const body = req.body;

    // { name, price } = desestruturação do body que estamos recebendo
    const { name, price } = req.body;

    // passando os dados para essa const
    const product = {
        name,
        price,
        id: randomUUID(),
    };

    // colocando os dados no array products
    products.push(product);

    // retornando os produtos que temos
    return res.json(product);
});

app.get("/products", (req, res) => {
    // retornando todos os itens do array
    return res.json(products);
});

// passando params por URL
app.get("/products/:id", (req, res) => {
    // desestruturando e pegando o id que está vindo com a URL
    const { id } = req.params;

    // percorrendo o array de produtos até achar um produto com o mesmo id
    const product = products.find((product) => product.id === id);

    // retornando o produto que achamos
    return res.json(product);
});

// atualizando um produto
app.put("/products/:id", (req, res) => {
    // desestruturando e pegando o id que está vindo com a URL
    const { id } = req.params;
    const { name, price } = req.body;

    // tentando achar o index que o produto está no array
    const productIndex = products.findIndex((product) => product.id === id);

    // mudando os dados do produto que queremos
    products[productIndex] = {
        // ... = rest operator (pega todos os dados do produto queremos mudar, mas muda o name e price como está nas linhas abaixo)
        ...products[productIndex],
        name,
        price,
    };

    return res.json({
        product: products[productIndex],
        message: "Produto alterado com sucesso!",
    });
});

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;

    const productIndex = products.findIndex((product) => product.id === id);

    // removendo o item que queremos
    products.splice(productIndex, 1);

    return res.json({ message: "Produto retirado!" });
});

app.listen(4001, () => console.log("Servidor rodando na porta 4001"));
