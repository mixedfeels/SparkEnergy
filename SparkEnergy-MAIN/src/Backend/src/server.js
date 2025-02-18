const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 3002;

app.use(express.json()); // Permite receber dados em JSON

// Define as opções de CORS para permitir requisições apenas de http://localhost:3000
const corsOptions = {
  origin: [
    "https://sparkenergy.netlify.app", // Permite a origem do seu frontend no Netlify
    "http://localhost:3000", // Permite o frontend rodando localmente
  ],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Aplica o CORS com as opções definidas

const db = require("./models"); // Pasta onde fica o banco de dados

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

const usersRouter = require("./routes/Users");
app.use("/user", usersRouter);

const likesRouter = require("./routes/Likes");
app.use("/likes", likesRouter);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados foi bem-sucedida!");

    // Sincronizar as tabelas
    return db.sequelize.sync({ force: false }); // force: false evita que as tabelas sejam apagadas
  })
  .then(() => {
    // Após a sincronização, inicie o servidor
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(
      "Erro durante a autenticação ou sincronização do banco de dados:",
      err
    );
  });
