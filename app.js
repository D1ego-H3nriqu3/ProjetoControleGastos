import PromptSync from "prompt-sync";
const prompt = PromptSync()
import sairSistema from "./sair.js";
import registrarG from "./registrarGasto.js";

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

        break
        case("3"):

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