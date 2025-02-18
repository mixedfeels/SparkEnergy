const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
  // Vai pegar o token criado no header
  const accessToken = req.header("accessToken");

  if (!accessToken) return res.json({ error: "Usuário não está logado!" });

  try {
    // Verifica se é igual ao token do usuário
    const validToken = verify(accessToken, "imporantsecret");
    req.user = validToken;

    if (validToken) {
      return next();
    }
  } catch (error) {
    return res.json({ error: error });
  }
};

module.exports = { validateToken };
