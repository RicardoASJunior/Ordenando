function swap(){
    null
};

function shuffle(){
    null
};

function bubble_sort(items){
    let swap;
    let last =  items.length -1;
    do {
        swap=false;
        for(let i=0; i < last; i++){
            if (items[i] > items[i+1]){
                [items[i], items[i + 1]] = [items[i + 1], items[i]];
                swap = true;
            }
        }
        last--;
    } while(swap)
    return items;
}
 
function selection_sort(vetor){
    let menor;

    for (let i = 0; i < vetor.length - 1; i++){
        menor = i;
        for(let j = i + 1; j < vetor.length; j++){
            if (vetor[j] < vetor [menor]){
                menor = j;
            }
        }
        if (i != menor){
            [vetor[i], vetor[menor]] = [vetor[menor], vetor[i]];
        }
    }
    return vetor;
}

function quick_sort(){
    if (Array.length === 0) return [];
    if (Array.length === 1) return Array;

    var pivot = array[0];

    var head = array.filter(n => n < pivot);
    var equal = array.filter(n => n === pivot);
    var tail = array.filter(n => n < pivot);

    return quick_sort(head).concat(equal).concat(quick_sort(tail));

}

function particionamento(){
    null
};

function add(){
    let text =  document.getElementById("texto").value;
    let list = document.getElementById("valores").innerHTML;
    list += `<li>${text}</li>`;
    text += text;
    document.getElementById("valores").innerHTML = list;
    document.getElementById("texto").value = null;
    console.log(text);
};

function limpar(){
    let list = document.getElementById("valores").innerHTML;
    list = null;
    document.getElementById("valores").innerHTML = list;
};