class Animal{
    constructor(tipo,porte,femea,nascimento){
        this.tipo= tipo;
        this.porte= porte;
        this.femea=femea;
        this.nascimento=nascimento;
    }

    FazerBarulho(){
        console.log("Fazendo barulho...")
    }
    retornarIdade(anoatual){
        return anoatual-this.nascimento
    }
}

class Gato extends Animal{
    constructor(raca,cor){
        this.raca= raca;
        this.cor= cor;
    }
    miar(){
        console.log("miauuuuuuuuuuuu......")
    }
}

class Cachorro extends Animal{
    constructor(tipo,raca,cor){
        this.tipo= tipo;
        this.raca= raca;
        this.cor= cor;
    }
    Latir(){
        console.log("auau....")
    }
}

let bicho1 = new Animal("mamifero","medio",false,20007)
console.log(bicho1)
console.log(bicho1.porte)
bicho1.FazerBarulho()
let frajola = new Gato("felino","sphynx","preto")
frajola.FazerBarulho()
frajola.miar()
let luke =new Cachorro("mamifero","bulldog","marrom")
luke.Latir()
luke.retornarIdade(2023)
luke.nascimento=2021
console.log("a idade é"+luke.retornarIdade(2023))
frajola.retornarIdade(2023)
frajola.nascimento= 2021
console.log("a idade é"+frajola.retornarIdade(2023))