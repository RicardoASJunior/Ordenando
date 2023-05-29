let blocos = []
const pnlCatalogo = document.getElementById('pnlCatalogo')

getJson()
async function getJson(){
    await fetch("elementos.json").then((response) => {
        response.json().then((cards) => {
            blocos = cards
            exibirCards(blocos)
        })
    })
}
function exibirCards(listaDeCards){
    listaDeCards.forEach(card => {
        pnlCatalogo.innerHTML += `
        <nav class="card p-3 m-4 card-largura">
        <img src="${card.imagem}" class="card-img-top card-posicao-imagem"
        alt="Imagem de macarrão com tomate">
        <h2 class="text-center titulo-card p-2">${card.titulo}</h2>
        <div class="card-body">
            <ul class="border-bottom p-2">
                <li>${card.ingredientes[0]}</li>
                <li>${card.ingredientes[1]}</li>
                <li>${card.ingredientes[2]}</li>
                <li>${card.ingredientes[3]}</li>
                <li>${card.ingredientes[4]}</li>
            </ul>
            <article class="card-text p-1">${card.preparo}</article>
        </div>
        </nav>
        `
    })
}
