let lista = ["tela","hoje"];
let palavra;
let posicao;
let alfabeto = "abcdefghijklmnopqrstuvwxyz"
let letras = alfabeto.split("");
let chances = 6;

function geral(){
    posicao = Math.floor(Math.random()*lista.length);
    palavra = lista[posicao];

    palavraS();
    botoes();
}

function botoes(){
    for(let i = 0; i < letras.length; i++){
        let botao = document.createElement("button");
        botao.innerText = letras[i];
        botao.setAttribute('id', letras[i]);
        botao.setAttribute('onclick', 'jogo(\''+letras[i]+'\')');


        let div = document.getElementById("botao");
        div.appendChild(botao);
    }
}

function palavraS(){
    for(let i = 0; i < palavra.length; i++){
        let span = document.createElement("span");
        span.setAttribute('id', i);


        let div = document.getElementById("palavra");
        div.appendChild(span);
    }
}

let aux = 0

function jogo(id){
    let aux1 = false;

    for(let i = 0; i < palavra.length; i++){
        if(id == palavra[i]){
            let span = document.getElementById(i);
            let aux3 = document.createTextNode(id);

            span.appendChild(aux3);

            aux1 = true;
            aux++;

            let div = document.getElementById("palavra");
            div.appendChild(span);

            if(aux == palavra.length){
                reloading();
                for(let i = 0; i<letras.length; i++){
                    let b = document.getElementById(letras[i]);
                    b.removeAttribute('onclick')
                }
            }
        }else{
            let span = document.getElementById(i);
            let aux3 = document.createTextNode("");

            let div = document.getElementById("palavra");
            div.appendChild(span);
        }
    }

    if(aux1 == false){
        chances--;
    }

    if(chances == 5){
    }
    if(chances == 0){
        reloading();
    }
    
    let button = document.getElementById(id);
    button.setAttribute('class', 'ok');
    button.removeAttribute('onclick');
}

function reloading(){
    let button = document.createElement("button");
    button.innerText = "Novo Jogo";

    button.setAttribute('onclick', 'window.location.reload()');

    let div = document.getElementById("njogo");
    div.appendChild(button);
}

geral();