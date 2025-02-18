const express = require("express");
const router = express.Router();
const { Likes } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.post("/", validateToken, async (req, res) => {
  // ValidateToken já indentificar qual é o Id do usuário
  const { PostId } = req.body;
  const UserId = req.user.id;

  // Procura se o PostId e o UserId já existem na tabela
  const found = await Likes.findOne({
    where: { PostId: PostId, UserId: UserId },
  });

  if (!found) {
    // Se não existe crie o Like
    await Likes.create({ PostId: PostId, UserId: UserId });
    res.json({ liked: true });
  } else {
    // Se existe Delete o Like
    await Likes.destroy({
      where: { PostId: PostId, UserId: UserId },
    });
    res.json({ liked: false });
  }
});

module.exports = router;
