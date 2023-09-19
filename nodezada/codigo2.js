const parImparNovo = numero =>{
    if(numero < 0){
        return 'negativo'
    }
    else if(numero == 0){
        return 'zero'
    }
    else if (numero%2== 0){
        return 'par'
    }
    else{
        return 'impar'
    }

}

console.log("O numero e"+parImparNovo(0))
console.log("O numero e"+parImparNovo(-1))
console.log("O numero e"+parImparNovo(1))
console.log("O numero e"+parImparNovo(2))