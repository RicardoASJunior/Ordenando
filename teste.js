const valores = document.getElementById('valores')
const limparLista = document.getElementById('btn-limpar')
const bubbleSort = document.getElementById('bubble_sort')

let itens = [] 

const adicionarElemento = document.getElementById('btn-adicionar')
adicionarElemento.addEventListener('click', (evento) => {
    evento.preventDefault()
    let input = document.querySelector('#elemento')
    itens.push(input.value)
    console.log(itens)
    adicionandoElementoNaTela(itens)
})


function adicionandoElementoNaTela(itens){
    valores.innerHTML = ''
    itens.forEach(itens => {
        valores.innerHTML += `
        <li>${itens}</li>
        `
    })
}

limparLista.addEventListener('click', (evento) =>{
    evento.preventDefault()
    itens = []
    adicionandoElementoNaTela(itens)
})








