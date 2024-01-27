const express = require("express");
const app = express();

const UserRouter = express.Router();
const zod = require("zod");
const jwt= require('jsonwebtoken')
const { User, Account } = require("../db");
const { JWT_SECRET } = require("../config");
const { middlewareFunc } = require("../middlewares");

const signupSchema = zod.object({
  username: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

UserRouter.post("/signup", async (req, res) => {
  const sucess = signupSchema.safeParse(req.body);
  if (!sucess) {
    return res.json({
      msg: "Incorrect inputs",
    });
  }
  const existingUser = await User.findOne({
    username: req.body.username,
  });
  if (existingUser) {
    return res.status(411).json({
      message: "Email already taken/Incorrect inputs",
    });
  }
  
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,

  });
  const userId= user._id;


    const token = jwt.sign({
        userId
    }, JWT_SECRET);

  await Account.create({
    userId: userId,
    balance: Math.ceil(Math.random()*10000)
  })

  res.json({
    message: "User created successfully",
    token:token,
  });
});

UserRouter.post("/signin", async (req, res) => {
  const success = signinSchema.safeParse(req.body);
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  if (user) {
    const token = jwt.sign(
      {
        userId: user._id,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
    return;
  }
  res.status(411).json({
    message: "Error while logging in",
  });
});

const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
});

UserRouter.put("/", middlewareFunc, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({
      message: "Error while updating information",
    });
  }

  await User.updateOne({_id:req.userId}, req.body);

  res.json({
    message: "Updated successfully",
  });
});

UserRouter.get("/bulk", async (req, res) => {
  const filter = req.query.filter || "";
  const users = await User.find({
    $or: [
      {
        firstName: { $regex: filter,
        $options:'i' },
      },
      {
        username: { $regex: filter,
          $options:'i' },
      },
      {
        lastName: { $regex: filter,
          $options:'i' },
      },
    ],
  });
  res.json({users});
});

module.exports = {
  UserRouter,
};
