require('dotenv').config();
const url= process.env.JWT_KEY;

module.exports={
    JWT_SECRET:url,
    
}