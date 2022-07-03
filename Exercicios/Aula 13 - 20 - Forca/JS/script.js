let lista = ["programador", "web", "css", "html", "div", "container", "style", "script", "site", "desenvolvedor", "programa", "linguagens", "lógica", "github"];

function menssages(msge){
    let msg = document.createElement("h2");
    msg.innerText = msge;
    
    let div = document.getElementById("menssage");
    div.appendChild(msg);
}

let posicao = Math.floor(Math.random()*lista.length);

let chances = 6;
let img;

document.getElementById("img").src = "../IMG/forca0"+img+".png";  


let letras = "abcdefghijklmnopqrstuvwxyz";
let letra = letras.split("");

for(i=0; i<letra.length; i++){
    let button = document.createElement("button");
    button.innerText = letra[i];
    button.setAttribute('onclick', 'letraA(\''+letra[i]+'\')');

    let div = document.getElementById("keyboard");
    div.appendChild(button);
}

let palavra = lista[posicao];
let lPalavra = palavra.split("");

for(i=0; i<lPalavra.length; i++){
    // let palavra = lista[posicao]
    let span = document.createElement("span");
    span.setAttribute('id', i);
    
    let div = document.getElementById("wDrawn");
    div.appendChild(span);
}

function letraA(id){
    
    let aux2 = false;
    for(i=0; i<palavra.length; i++){
        if(id == palavra[i]){
            let span = document.getElementById(i);
            let aux = document.createTextNode(id);
            
            span.appendChild(aux);

            let div = document.getElementById("wDrawn");
            div.appendChild(span);

            aux2 = true;
        }else{
            let span = document.getElementById(i);
            let aux = document.createTextNode("");
            
            span.appendChild(aux);

            let div = document.getElementById("wDrawn");
            div.appendChild(span);
        }
    }

    if(aux2 == false){
        chances--;
        alert(chances);
    }

    if(chances == 6){
        img = 1;
        menssages("Bem vindo!");
    }else if(chances == 5){
        img = 2;
        menssages("Ai minha cabeça... Toma cuidado!");
    }else if(chances == 4){
        img = 3;
        menssages("Agora o corpo... Ai, ai, ai!");
    }else if(chances == 3){
        img = 4;
        menssages("Isso não vai dá nada bom...");
    }else if(chances == 2){
        img = 5;
        menssages("Reeita!");
    }else if(chances == 1){
        img = 6;
        menssages("Só falta uma, UMA perna... Misera!");
    }else if(chances == 0){
        img = 7;
        menssages("Ai não!");
    }
}