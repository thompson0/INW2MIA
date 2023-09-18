// mongodb://localhost:27017

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/exemplo', {useNewUrlParser : true, useUnifiedTopology: true, serverSelectionTimeoutMS: 20000});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error : "))

db.once("open", function(){
    console.log('Conectado ao MongoDB');
})

const pessoaSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    profissao : String
});

const Pessoa = mongoose.model('Pessoa',pessoaSchema)

const Marcos = new Pessoa({
    nome : 'Marcos',
    idade : 25,
    profissao : 'Estudante'
});

Marcos.save()