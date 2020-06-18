const express = require('express'); //importando o express
const mongoose = require('mongoose'); //importando ORM -> mongoDB
const cors = require('cors');
const requireDir = require('require-dir'); //pegar todos os models
//npm install -D nodemon

//iniciando o app
const app = express(); 
app.use(express.json());
app.use(cors());

//conectando com o banco
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true,  useUnifiedTopology: true });

//require('./src/models/Product'); //registrando o model
requireDir('./src/models');

// rotas 
app.use("/api", require("./src/routes"));


//server
app.listen(3001);