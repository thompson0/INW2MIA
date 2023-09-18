
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {useNewUrlParser : true, 
    useUniFiedTopology : true, 
    serverSelectionTimeoutMS : 20000
    }
)

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error :'));

db.once('open', function(){
    console.log("Estamos conectados ao mongodb")
})

const alunoSchema  = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number,
    turma : String
})

const Alunos = mongoose.model('Alunos', alunoSchema);

const Paulo = new Alunos({
    matricula: 'rm201',
    nome : 'Paulo',
    idade : 10,
    turma : '2MIA'

})

Paulo.save()

const Maria = new Alunos({
    matricula: 'rm202',
    nome : 'Maria',
    idade : 12,
    turma : '2MIA'

})

Maria.save()

Alunos.findOne({nome : 'Maria'}, function(err, Aluno){
    console.log(Aluno)
})