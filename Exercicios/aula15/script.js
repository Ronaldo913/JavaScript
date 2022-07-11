let numeros = "+-x/0123456789"
let numero = numeros.split("")


for (i = 0; i < numero.length; i++) {
    let divv = document.getElementById("resultadoo")

    let button = document.createElement("button")
    button.innerText = numero[i]
    button.setAttribute('name', numero[i])
    button.setAttribute('id', numero[i])
    button.setAttribute('onclick', 'rodar(\'' + numero[i] + '\')')
    let div = document.getElementById("calculadora")
    div.appendChild(button)

    if ((i + 1) == numero.length) {
        let input = document.createElement("input")
        input.setAttribute('placeholder', '')
        divv.appendChild(input)
    }
}

function rodar(id) {
    var input = document.getElementById(id);
    input = 'd'

    if(id == '+' | id == 'x' | id == '-' | id == '/'){
        
    }

}



// function resultado(){
// }

// resultado()