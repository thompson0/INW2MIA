const leia = require("prompt-sync")();

let cod = ["COD1", "COD2", "COD3", "COD4", "COD5", "COD6", "COD7", "COD8", "COD9", "COD10"];
let descricao = ["Trilhas Ecológicas e Ecoturismo", "Educação Ambiental nas Escolas", "Construção Sustentável", "Reciclagem de Eletrônicos", "Transporte Público Ecológico", "Gestão de Água e Recursos Hídricos", "Horta Urbana Comunitária", "Consultoria em Eficiência Energética", "Instalação de Painéis Solares", "Coleta Seletiva de Resíduos"];
let valor = [10.00, 20.00, 30.00, 40.00, 50.00, 60.00, 70.00, 80.00, 90.00, 100.00];
let movimento = [0, 0, 0];
let carrinho = [];
let opcaoMenuPrincipal = "";
let opcaoSubMenu = "";
let mudanca = "";
let posicao = -1;

while (opcaoMenuPrincipal != "2") {
    console.log("FAÇA SUA DOAÇÃO\n\n");
    console.log("MENU PRINCIPAL");
    console.log("1 - Opções");
    console.log("2 - Sair");
    opcaoMenuPrincipal = leia("Digite o número da sua opção: ");

    if (opcaoMenuPrincipal == "1") {
        opcaoSubMenu = "";
        while (opcaoSubMenu != "7") {
            console.log("1 - MOSTRAR OS REGISTROS");
            console.log("2 - ALTERAR OS REGISTROS");
            console.log("3 - CADASTRAR OS REGISTROS");
            console.log("4 - ESCOLHA UM VALOR PRA DOAR");
            console.log("5 - EXCLUIR UM REGISTRO");
            console.log("6 - CARRINHO DE COMPRAS");
            console.log("7 - SAIR");
            opcaoSubMenu = leia("Digite o número da sua opção: ");

            if (opcaoSubMenu == "1") {
                console.log("COD\tDESCRICAO");
                for (let x = 0; x < cod.length; x++) {
                    console.log(cod[x] + "\t" + descricao[x] + "\t\t");
                }
            } else if (opcaoSubMenu == "2") {
                mudanca = leia("Digite o código do produto que deseja alterar: ").toUpperCase();
                for (let x = 0; x < cod.length; x++) {
                    if (mudanca == cod[x]) {
                        posicao = x;
                    }
                }
                if (posicao == -1) {
                    console.log("Produto não encontrado...");
                } else {
                    cod[posicao] = leia("Digite o novo código: ");
                    descricao[posicao] = leia("Digite a nova descrição: ");
                }
            } else if (opcaoSubMenu === "3") {
                let novoCodigo = leia("Digite o novo código: ").toUpperCase();
                let novaDescricao = leia("Digite a nova descrição: ");
                cod.push(novoCodigo);
                descricao.push(novaDescricao);
                movimento.push(0);
                console.log("Novo registro cadastrado com sucesso!");
            } else if (opcaoSubMenu == "4") {
                console.log("Escolha um serviço para doar:\n");
                for (let i = 0; i < descricao.length; i++) {
                    console.log(`${i + 1} - ${descricao[i]}`);
                }
                let escolhaServico = parseInt(leia("Digite o número correspondente ao serviço: ")) - 1;
                if (escolhaServico >= 0 && escolhaServico < descricao.length) {
                    console.log("Escolha um valor para doar:\n");
                    for (let i = 0; i < valor.length; i++) {
                        console.log(`${i + 1} - R$${valor[i]}`);
                    }
                    let escolhaValor = parseInt(leia("Digite o número correspondente ao valor: ")) - 1;
                    if (escolhaValor >= 0 && escolhaValor < valor.length) {
                        carrinho.push({ serviço: descricao[escolhaServico], valor: valor[escolhaValor] });
                        console.log(`Doação de R$${valor[escolhaValor]} realizada com sucesso para o serviço ${descricao[escolhaServico]}.`);
                        movimento[escolhaValor] += 1;
                    } else {
                        console.log("Opção inválida.");
                    }
                } else {
                    console.log("Opção inválida.");
                }
            } else if (opcaoSubMenu == "5") {
                console.log("Escolha um serviço para excluir:\n");
                for (let i = 0; i < descricao.length; i++) {
                    console.log(`${i + 1} - ${descricao[i]}`);
                }
                let escolhaExcluir = parseInt(leia("Digite o número correspondente ao serviço para excluir: ")) - 1;
                if (escolhaExcluir >= 0 && escolhaExcluir < descricao.length) {
                    cod.splice(escolhaExcluir, 1);
                    descricao.splice(escolhaExcluir, 1);
                    valor.splice(escolhaExcluir, 1);
                    movimento.splice(escolhaExcluir, 1);
                    console.log("Registro excluído com sucesso.");
                } else {
                    console.log("Opção inválida.");
                }
            } else if (opcaoSubMenu == "6") {
                console.log("CARRINHO DE COMPRAS\n");
                for (let i = 0; i < carrinho.length; i++) {
                    console.log(`${carrinho[i].serviço} - R$${carrinho[i].valor}`);
                }
            }
        }
    }
}

console.log("Até breve");
