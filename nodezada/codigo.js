const parImpar = (numero) => {
    if(numero<0){
console.log("negativo")
    }
    else if(numero==0){
        console.log("zero")
    }
   else if((numero%2)==0){
        console.log("par")
    }
    else{
        console.log("impar")
    }
    
}
parImpar(40)
parImpar(0)
parImpar(13)
parImpar(-1000)