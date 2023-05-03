class aviao{
    constructor(velocidade,velocidademax,peso,ligado){
        this.velocidade=velocidade;
        this.velocidademax=velocidademax;
        this.peso=peso;
        this.ligado=ligado
        
    }
    ligar(){
        console.log('ligando')
        this.ligar= true
    }

}

let aviao1= new aviao(0,800,'280000kg',false)
let aviaodaturma= new aviao(0,800,'30000kg',false)
aviaodaturma.ligar()
console.log(aviao1)