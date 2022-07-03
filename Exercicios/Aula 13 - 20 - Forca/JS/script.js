let lista = ["programador", "web", "css", "html", "div", "container", "style", "script", "site", "desenvolvedor", "programa", "linguagens", "lógica", "github"];

img = 1;
document.getElementById("img").src = "../IMG/forca0"+img+".png";

function menssages(msge){
    let msg = document.createElement("h2");
    msg.innerText = msge;
    
    let div = document.getElementById("menssage");
    div.appendChild(msg);
}

if(img == 1){
    menssages("Bem vindo!");
}else if(img == 2){
    menssages("Ai minha cabeça... Toma cuidado!");
}else if(img == 3){
    menssages("Agora o corpo... Ai, ai, ai!");
}else if(img == 4){
    menssages("Isso não vai dá nada bom...");
}else if(img == 5){
    menssages("Se liga porra! Quero morrer não!");
}else if(img == 6){
    menssages("Só falta uma, UMA perna... Misera!");
}else if(img == 7){
    menssages("Ai não!");
}

let posicao = Math.floor(Math.random()*lista.length);
let chances = 6;


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
    alert(id);
    
    for(i=0; i<palavra.length; i++){
        alert(palavra[i]);
        if(id == palavra[i]){
            let span = document.getElementById(i);
            span.innerText(palavra[i]);
        }
    }

}
    
    
    // let img = 2;
    
    // for(i=0; i<chances; i++){
    //     if(img == i){
    //         document.getElementById("images").src = "../IMG/forca0"+img+".png";
    //     }
    // }
    
function jogando(letra){
    for(i=0; i<posicao.length; i++){
        // if(letra != posicao[i])
        img = 2;
        document.getElementById("images").src = "../IMG/forca0"+img+".png";
    }
}