import PromptSync from "prompt-sync";
const prompt = PromptSync()
import sairSistema from "./sair.js";

let indice = true

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