const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const middlewareFunc = async (req, res, next) => {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ msg: "Please provide proper token starting with Bearer" });
  }
  const authHeader = req.headers.authorization.split(" ")[1];

  const decoded = jwt.verify(authHeader, JWT_SECRET, (err) => {
    if (err) {
      return res.status(403).send("Failed to verify token");
    }
  });
  req.userId= decoded.userId;

  next();
};

module.exports = {
  middlewareFunc,
};
