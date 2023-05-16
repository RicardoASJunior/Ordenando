const valores = document.getElementById('valores')
const limparLista = document.getElementById('btn-limpar')
const adicionarElemento = document.getElementById('btn-adicionar')
const ordenar = document.getElementById('btn-ordenar')
const misturar = document.getElementById('btn-misturar')
let itens = [] 


adicionarElemento.addEventListener('click', (evento) => {
    evento.preventDefault()
    let input = document.querySelector('#elemento')
    itens.push(parseInt(input.value))
    console.log(itens)
    adicionandoElementoNaTela(itens)
})


function adicionandoElementoNaTela(lista){
    valores.innerHTML = ''
    lista.forEach(lista => {
        valores.innerHTML += `
        <li>${lista}</li>
        `
    })
}

limparLista.addEventListener('click', (evento) =>{
    evento.preventDefault()
    itens = []
    adicionandoElementoNaTela(itens)
})

function atualizarSelect(){
    let select = document.querySelector("#organiza")
    let optionValue = select.options[select.selectedIndex]
    let valorSelect = optionValue.value

    return valorSelect
}

ordenar.addEventListener('click', (evento) => {
    evento.preventDefault()
    let valorDoSelect = atualizarSelect()  
    if (valorDoSelect === "sorted"){
        selection_sort(itens)
        adicionandoElementoNaTela(itens)
    }
    if (valorDoSelect === "quick_sort"){
        quick_sort(itens)
        itens = quick_sort(itens)
        adicionandoElementoNaTela(itens)
    }
    if (valorDoSelect === "bubble_sort"){
        bubble_sort(itens)
        adicionandoElementoNaTela(itens)
    }
})

function bubble_sort(lista) {
    var tamanhoLista = lista.length;  
    for (var i = 0; i < tamanhoLista; i++) {
          for (var j = 0; j < (tamanhoLista - i - 1); j++) {
                   if(lista[j] > lista[j+1]) {
                           var posicaoLista = lista[j]; 
                lista[j] = lista[j+1]; 
                lista[j+1] = posicaoLista; 
            }
        }        
    }
}


misturar.addEventListener('click', (evento) => {
    evento.preventDefault()
    shuffle(itens)
    adicionandoElementoNaTela(itens)
})

function shuffle(lista) {
    for (var j, x, i = lista.length; i; j = Math.floor(Math.random() * i), x = lista[--i], lista[i] = lista[j], lista[j] = x);
    return lista;
}

function quick_sort(lista){
    const pivo = lista[lista.length - 1];
    const leftLista = [];
    const rightLista = [];

    if(lista.length <= 1){
      return lista;
    }
    for(let i=0; i < lista.length-1;i++){
      lista[i] < pivo ? leftLista.push(lista[i]) :  rightLista.push(lista[i])
    }
    return [...quick_sort(leftLista) ,pivo,...quick_sort(rightLista)];
}
  
function selection_sort(lista) { 
    let tamanhoLista = lista.length;
    for(let i = 0; i < tamanhoLista; i++) {
        let posicao = i;
        for(let j = i+1; j < tamanhoLista; j++){
            if(lista[j] < lista[posicao]) {
                posicao=j; 
            }
         }
         if (posicao != i) {
             let tmp = lista[i]; 
             lista[i] = lista[posicao];
             lista[posicao] = tmp;      
        }
    }
    return lista;
}
