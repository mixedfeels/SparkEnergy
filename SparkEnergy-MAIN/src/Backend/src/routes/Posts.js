const express = require("express");
const router = express.Router();
const { Posts, Likes, Addresses } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

// Toda vez que for usar métodos do express a funcão tem que ser 'async'
router.get("/", validateToken, async (req, res) => {
  const listOfPosts = await Posts.findAll({ include: [Likes] });

  const likedPosts = await Likes.findAll({ where: { userId: req.user.id } });
  res.json({ listOfPosts: listOfPosts, likedPosts: likedPosts });
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findByPk(id);
  res.json(post);
});

router.get("/byuserId/:id", async (req, res) => {
  const id = req.params.id;
  const listOfPosts = await Posts.findAll({
    where: { UserId: id },
    include: [Likes],
  });
  res.json(listOfPosts);
});

router.post("/", validateToken, async (req, res) => {
  const post = req.body;
  const userId = req.user.id; // ID do usuário logado

  // Encontra o endereço do usuário
  const address = await Addresses.findOne({
    where: { userId }, // Busca o endereço relacionado ao usuário
  });

  if (address) {
    post.UserId = req.user.id;
    post.username = req.user.username; // Nome de usuário
    post.state = address.state; // Estado do endereço do usuário
    post.city = address.city; // Cidade do endereço do usuário
    post.district = address.district; // Distrito do endereço do usuário
  } else {
    // Caso o endereço não exista, podemos enviar um erro ou usar valores padrões
    return res
      .status(400)
      .json({ message: "Endereço não encontrado para o usuário." });
  }

  // Criação do post com as informações
  await Posts.create(post);
  res.json(post); // Retorna o post criado
});

router.put("/title", validateToken, async (req, res) => {
  const { newTitle, id } = req.body;
  await Posts.update({ title: newTitle }, { where: { id: id } });
  res.json(newTitle);
});

router.put("/description", validateToken, async (req, res) => {
  const { newDescription, id } = req.body;
  await Posts.update({ description: newDescription }, { where: { id: id } });
  res.json(newDescription);
});

router.delete("/:postId", validateToken, async (req, res) => {
  const postId = req.params.postId;
  await Posts.destroy({
    where: {
      id: postId,
    },
  });
  res.json("post deleted");
});

module.exports = router;
