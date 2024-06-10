const express = require('express');
const routerLivro = require('./route/routesLivro');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', routerLivro);

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM - http://localhost:3000');
});