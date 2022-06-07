import express from "express";

const app = express();

app.get("/primeira-rota", (req, res) => {
    // return res.send("Acessou a primeira rota"); // enviando uma msg (vai aparecer na tela)

    return res.json({
        message: "Acessou a primeira rota com nodemon",
    });
});

app.listen(4001, () => console.log("Servidor rodando na porta 4001"));
