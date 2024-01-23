const { default: mongoose, Schema } = require("mongoose");
 require('dotenv').config();
 const url= process.env.mongoUrl
mongoose.connect(url);


const UserSchema= new Schema({
  username:String, 
  firstName:String,
  lastName: String,
  password:String,
});

const AccountSchema= new Schema({
  userId: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  balance:Number
})

const User= mongoose.model('Users',UserSchema);
const Account= mongoose.model('Accounts', AccountSchema)

module.exports={
    User,
    Account,
}
