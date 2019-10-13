const routes = require('express').Router();
const {User} = require('./app/models');

User.create({
    name : "Felipe dos Santos",
    email : "felipe@2333.com",
    password_hash : "2131322sdadd3132313131"
}).then(user => res.status(201).send(user))
.catch(error => res.status(400).send(error));
 //Definição de Rotas

module.exports = routes;