const express = require('express');
const routerLivro = require('./route/routesLivro');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.use('/', routerLivro);

app.listen(5000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:5000');
});