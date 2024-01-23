const express = require("express");
const app= express();
const router= require('./routes/index');
const cors= require('cors');
const bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use('/api/v1',router);
app.use(cors());


 app.listen(3000,()=>{
    console.log('Server started')
 });






