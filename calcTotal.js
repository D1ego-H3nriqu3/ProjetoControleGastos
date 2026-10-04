function calcTotal(gastos){
    let total = 0
    for(let i = 0; i < gastos.length; i++){
        let gastoAtual = gastos[i]
        total += gastoAtual.valor
    }
    return `Total gasto: R$ ${total.toFixed(2)}`
}

export default calcTotal