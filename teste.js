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
        console.log("funcionou-sorted")
    }
    if (valorDoSelect === "quick_sort"){
        quick_sort(itens)
        adicionandoElementoNaTela(itens)
    }
    if (valorDoSelect === "bubble_sort"){
        bubble_sort(itens)
        adicionandoElementoNaTela(itens)
    }
})

function bubble_sort(lista) {
    var length = lista.length;  
    for (var i = 0; i < length; i++) {
          for (var j = 0; j < (length - i - 1); j++) {
                   if(lista[j] > lista[j+1]) {
                           var tmp = lista[j]; 
                lista[j] = lista[j+1]; 
                lista[j+1] = tmp; 
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


// function quick_sort(lista) {
//     if (lista.length <= 1) {
//       return lista;
//     }
  
//     var pivot = lista[0];
    
//     var left = []; 
//     var right = [];
  
//     for (var i = 1; i < lista.length; i++) {
//       lista[i] < pivot ? left.push(lista[i]) : right.push(lista[i]);
//     }
//     lista =quick_sort(left).concat(pivot, quick_sort(right));
//     return lista
//   };
  



 






