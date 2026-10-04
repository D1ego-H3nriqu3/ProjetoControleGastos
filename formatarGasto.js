function formatarLista(gastoAtual, i){
    return `${i + 1}. ${gastoAtual.descricao} - R$ ${gastoAtual.valor.toFixed(2)}`
}

export default formatarLista