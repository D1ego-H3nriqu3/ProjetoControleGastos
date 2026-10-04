function formatarLista(gastos){
    let mensagens = []
    for(let i = 0; i < gastos.length; i++){
        let gastoAtual = gastos[i]
        let mensagem = `${i + 1}. ${gastoAtual.descricao} - R$ ${gastoAtual.valor.toFixed(2)}`
        mensagens.push(mensagem)
    }
    return mensagens
}

export default formatarLista