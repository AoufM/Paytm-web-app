const express = require("express");
const { middlewareFunc } = require("../middlewares");
const { Account, User } = require("../db");
const { default: mongoose } = require("mongoose");
const AccountRouter = express.Router();

AccountRouter.get("/balance", middlewareFunc, async (req, res) => {
  const acc = await Account.findOne({
    userId: req.userId,
  });

  const {username}= await User.findOne({
    _id:req.userId
  })

  const users= await User.find();
  const userArr= users.filter((user) => user._id.toString() !== req.userId.toString()
  )
  

  res.json({
    username,
    userArr,
    balance: acc.balance,
  });
});

AccountRouter.post("/transfer", middlewareFunc, async (req, res) => {
  const mongooseSession = await mongoose.startSession();

  mongooseSession.startTransaction();
  const { amount, to } = req.body;
  const account = await Account.findOne({ userId: req.userId }).session(
    mongooseSession
  );

  if (!account || account.balance < amount) {
    await mongooseSession.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance",
    });
  }

  const toAccount = await Account.findOne({ userId: to }).session(mongooseSession);

  if (!toAccount) {
    await mongooseSession.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  await Account.updateOne(
    { userId: req.userId },
    { $inc: { balance: -amount } }
  ).session(mongooseSession);

  await Account.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(mongooseSession);

  await mongooseSession.commitTransaction();
  res.json({
    message: "Transfer successful",
  });
});

module.exports = {
  AccountRouter,
};
