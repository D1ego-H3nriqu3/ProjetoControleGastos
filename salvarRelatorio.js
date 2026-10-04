import calcTotal from "./calcTotal.js"
import formatarLista from "./formatarGasto.js"
import fs from "node:fs"

function sRelatorio(gastos){
    if (gastos.length === 0){
        console.log("\nNão há o que salvar!")
    }else{
        fs.appendFileSync(`relatorio.txt`, `Relátorio de gastos:\n${formatarLista(gastos).join("\n")}\n${calcTotal(gastos)}`)
        console.log("\nRelatório salvo em relatorio.txt!")
    }
}

export default sRelatorio