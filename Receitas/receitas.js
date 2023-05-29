fetch("elementos.json").then((response) => {
    response.json().then((cards) => {
        return cards
    })
})
getListaIngredientes(cards)

function getListaIngredientes(receita){
    forEach(receita , () => {
        `<li>${elementoLista}</li>`
    })
}

function getCard(receita){

}

function preencheCatalogo(){

}

// onload ?????????
`<nav class="card p-3 m-4 card-largura">
    <img src="${imagem}" class="card-img-top card-posicao-imagem"
    alt="Imagem de macarrão com tomate">
    <h2 class="text-center titulo-card p-2">${titulo}</h2>
    <div class="card-body">
        <ul class="border-bottom p-2">
            ${lista}
        </ul>
        <article class="card-text p-1">${preparo}</article>
    </div>
</nav>
`