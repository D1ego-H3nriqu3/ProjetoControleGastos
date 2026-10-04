import PromptSync from "prompt-sync";
const prompt = PromptSync()
import sairSistema from "./sair.js";
import registrarG from "./registrarGasto.js";
import formatarLista from "./formatarGasto.js";
import calcTotal from "./calcTotal.js";

let indice = true

let gastos = []

do{
    console.log(`\n=== Controle de Gastos ===\n
1. Registrar gasto
2. Listar gastos
3. Ver total gasto
4. Salvar relatório
0. Sair`)
    let resposta = (prompt("Escolha uma opção: ")).trim()
    switch(resposta){
        case("1"):
        criarGasto()
        break
        case("2"):
        listarGastos()
        break
        case("3"):
        console.log("\n" + calcTotal(gastos))
        break
        case("4"):

        break
        case("0"):
        indice = sairSistema(indice)
        break
        default:
            console.log("\nDigite uma opção válida;")
    }
}while(indice === true)

    function criarGasto(){
        let descricao = (prompt("Digite a descrição do gasto: ")).trim()
        if (descricao === ""){
            console.log("\nDigite uma descrição válida;\n")
            return criarGasto()
        }
        let valor = Number(prompt("Digite o valor do gasto: "))
        if (isNaN(valor) || valor <= 0){
            console.log("\nDigite um valor válido;\n")
            return criarGasto()
        }
    let gasto = registrarG(descricao,valor)
    gastos.push(gasto)
    }

    function listarGastos(){
        if (gastos.length === 0){
            console.log("\nNão há nada para se ver aqui!")
        }else{
            console.log("\n")
        for(let i = 0; i < gastos.length; i++){
            let gastoAtual = gastos[i]
            console.log(formatarLista(gastoAtual, i))
        }
    }
    }