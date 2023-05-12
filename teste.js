const valores = document.getElementById('valores')
const limparLista = document.getElementById('limpar')
const bubbleSort = document.getElementById('bubble_sort')

let itens = [] 





const adicionarElemento = document.getElementById('btn-adicionar')
adicionarElemento.addEventListener('click', (evento) => {
    evento.preventDefault()
    let input = document.querySelector('#elemento')
    itens.push(input.value)
    console.log(itens)
})











