const express = require("express");
const router = express.Router();
const { Comments } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/:postId", async (req, res) => {
  const postId = req.params.postId;
  const comments = await Comments.findAll({ where: { PostId: postId } });
  res.json(comments);
});

router.post("/", validateToken, async (req, res) => {
  const comment = req.body;
  const username = req.user.username;
  comment.username = username;
  await Comments.create(comment);
  res.json(comment);
});

router.delete("/:commentId", validateToken, async (req, res) => {
  const commentId = req.params.commentId;

  if (!commentId) {
    return res.status(400).json({ error: "Comment ID is required" });
  }

  try {
    const result = await Comments.destroy({
      where: {
        id: commentId,
      },
    });

    if (result === 0) {
      return res.status(404).json({ error: "Comment not found" });
    }

    res.json("deleted successfully");
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the comment" });
  }
});

module.exports = router;
