function criaCartao(categoria, pergunta, resposta) {

    let container = document.getElementById('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = `
    <div class="cartao__conteudo">
        <h3>Biologia</h3>
        <div class="cartao__conteudo__pergunta">
            <p>Qual a organela responsável pela respiração celular?</p>
        </div>
        <div class="cartao__conteudo__resposta">
            <p>A organela responsável pela respiração é a mitocôndria</p>
        </div>
    </div>`

    container.appendChild(cartao)
}




