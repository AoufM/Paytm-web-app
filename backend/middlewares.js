const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const middlewareFunc = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(403)
      .json({ msg: "Please provide proper token starting with Bearer" });
  }
  const token = authHeader.split(" ")[1];
  console.log(token);
  console.log(JWT_SECRET);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(403).json({ msg: "Invalid token" });
  }

  // next();
};

module.exports = {
  middlewareFunc,
};
