import http from "http"; // módulo padrão do Node

// req - request
// res - response
http.createServer((req, res) => {
    // res.writeHead(status code, tipo de dado do retorno)
    res.writeHead(200, { "Content-Type": "application/json" });

    // vendo se na URL o user quer ir para o localhost:4001/produto
    if (req.url === "/produto") {
      res.end(
        JSON.stringify({
          message: "Rota de produto",
        })
      );
    }

    // vendo se na URL o user quer ir para o localhost:4001/usuarios
    if (req.url === "/usuarios") {
      res.end(
        JSON.stringify({
          message: "Rota de usuários",
        })
      );
    }

    // enviando algo para o user
    res.end(
      JSON.stringify({
        // chave: valor
        message: "Qualquer outra rota",
      })
    );
  })
  .listen(4001, () => console.log("Servidor rodando na porta 4001"));
// .listen(porta que nosso app vai rodar, () => msg que será exibida se tudo der certo)
