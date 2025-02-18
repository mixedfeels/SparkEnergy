const express = require("express");
const router = express.Router();
const { Users, Addresses, sequelize } = require("../models");
const bcrypt = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { where } = require("sequelize");

router.post("/", async (req, res) => {
  const { name, lastname, username, email, password, state, city, district } =
    req.body;
  const transaction = await sequelize.transaction(); // Inicia uma transação

  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await Users.create(
      {
        name,
        lastname,
        username,
        email,
        password: hash,
      },
      { transaction }
    ); // Passa a transação

    await Addresses.create(
      {
        state,
        city,
        district,
        userId: user.id,
      },
      { transaction }
    ); // Passa a transação
    await transaction.commit(); // Confirma a transação
    res.json("Cadastro realizado com sucesso!");
  } catch (error) {
    await transaction.rollback(); // Reverte a transação em caso de erro
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Busca o usuário junto com o endereço associado
    const user = await Users.findOne({
      where: { username: username },
      include: [{ model: Addresses }], // Inclui o endereço
    });
    const userEmail = await Users.findOne({ where: { email: email } });

    if (!user) {
      console.error("Usuário não encontrado.");
      return res
        .status(404)
        .json({ message: "Usuário ou email não encontrado." });
    }
    if (!userEmail) {
      console.error("Email não existe.");
      return res
        .status(404)
        .json({ message: "Usuário ou email não encontrado." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      console.error("Senha incorreta.");
      return res.status(401).json({ message: "Senha incorreta." });
    }

    // Acessa os dados do endereço
    const { state, city, district } = user.Address || {};

    const accessToken = sign(
      {
        username: user.username,
        state: state,
        city: city,
        district: district,
        id: user.id,
      },
      "imporantsecret"
    );

    res.json({ token: accessToken, username: username, id: user.id });
  } catch (error) {
    console.error("Erro ao processar a requisição:", error);

    res.status(500).json({ message: "Erro interno do servidor." });
  }
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

router.get("/basicinfo/:id", async (req, res) => {
  const id = req.params.id;

  const basicInfo = await Users.findOne({
    where: { id: id },
    include: [{ model: Addresses }],
    attributes: {
      exclude: ["password"],
    },
  });

  res.json(basicInfo);
});

router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  const user = await Users.findOne({ where: { username: req.user.username } });

  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) res.json({ error: "Senha errada" });

    bcrypt.hash(newPassword, 10).then((hash) => {
      Users.update(
        { password: hash },
        { where: { username: req.user.username } }
      );
      res.json("Success");
    });
  });
});

module.exports = router;
