class Pessoas{
    constructor(cpf,nome,anoNascimento){
        this.cpf=cpf;
        this.nome=nome;
        this.anoNascimento=anoNascimento
    }

    mostraridade(){
        console.log(2023-this.anoNascimento)
    }
}

let client1= new Pessoas('111.222.33-44','Marcos',1974)
console.log(client1)
client1.mostraridade()
console.log(client1.nome)