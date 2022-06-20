var password = document.querySelector('#pass');
var username = document.querySelector('#username');

// var paragrafo = document.querySelector('#p1');
var submit = document.getElementById('button').addEventListener("click", verificar);

function verificar(){
    if(password.value.length > 0 && username.value.length > 0){
        alert("Logindo...");
    }else{
        alert("ERROR! Usuário ou senha não preenchidos!");
        // 'window.location.reload()'
    }
}