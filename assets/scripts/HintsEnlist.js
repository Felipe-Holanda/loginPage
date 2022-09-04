class HintsEnlist {

    hintsArr = [
        "Promovendo serviços de alta qualidade e bom custo benefício desde 2007",
        "Você sabia que nossa plataforma permite a recepção de pagamentos tipo PIX sem custo adicional?",
        "No plano Business, você pode utilizar nossa plataforma para emitir notas de pagamentos!",
        "Você pode aumentar o seu plano na quantidade que desejar?!",
        "Atualmente possuímos 819 clientes ativos!",
        "Ao acessar o seu Dashboad, sempre verifique suas notificações!",
    ]

    static showHint() {
        const x = Math.floor(Math.random() * hintsArr.length)
        return hintsArr[x];
    }
}