var nome = "João Pedro";
var idade = 16;
var matriculado = true;

function most() {
    alert("Nome: "+nome+"\nIdade: "+idade+"\nMatriculado: "+matriculado);
}


let botao = document.createElement("button");
// põe em letra o texto que está na tal posição da lista letras com o createTextNode
let letra = document.createTextNode("mostrar");

// pondo no botão o texto que está em letra 
botao.appendChild(letra);
// onclick para chamar a função escolhe Letra cada vez que um botão é clicado
botao.setAttribute('onclick', 'most()');
// colocando id nos button com a própria letra
// ex.: <button onclick="escolheLetra('a')" id="a">a</button>
botao.setAttribute('id', "mostrar");

// criando variável div e o atribue o elemento que tem o id letras
let div = document.getElementById("mostrar");
// adicionando o botao dentro da div criada anteriormente com o appenChild
div.appendChild(botao);

// let botao = document.createElement("button");
//     // põe em letra o texto que está na tal posição da lista letras com o createTextNode
//     let letra = document.createTextNode(letras[posicao]);
    
//     // pondo no botão o texto que está em letra 
//     botao.appendChild(letra);
//     // onclick para chamar a função escolheLetra cada vez que um botão é clicado
//     botao.setAttribute('onclick', 'escolheLetra(\''+letras[posicao]+'\')');
//     // colocando id nos button com a própria letra
//     // ex.: <button onclick="escolheLetra('a')" id="a">a</button>
//     botao.setAttribute('id', letras[posicao]);

//     // criando variável div e o atribue o elemento que tem o id letras
//     let div = document.getElementById("letras");
//     // adicionando o botao dentro da div criada anteriormente com o appenChild
//     div.appendChild(botao);
document.getElementById("mostrar").addEventListener("click", mostrar);

function mostrar(){
    document.getElementById("1p").innerText = "Nome: "+nome;
    document.getElementById("2p").innerText = "Idade: "+idade;
    document.getElementById("3p").innerText = "Idade: "+matriculado;
}