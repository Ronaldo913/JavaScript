var xa=6;
var ya=2;

var xb=7;
var yb=10;

var xc=-4;
var yc=3;

var c1 = xa-xb;
var c2 = ya-yb;

c1 = Math.pow(c1, 2);
c2 = Math.pow(c2, 2);
var c3 = c1+c2;

var dab = Math.sqrt(c3);
alert(dab);

var c4 = xa-xc;
var c5 = ya-yc;

c4 = Math.pow(c4, 2);
c5 = Math.pow(c5, 2);
var c6 = c4+c5;

var dac = Math.sqrt(c6);
alert(dac);

var c7 = xb-xc;
var c8 = yb-yc;

c7 = Math.pow(c7, 2);
c8 = Math.pow(c8, 2);
var c9 = c7+c8;

var dbc = Math.sqrt(c9);
alert(dbc);

if((dab == dac & dab != dbc) || (dab == dbc & dab != dac)){
    alert("É um triângulo isósceles");
}else if(dab == dac == dbc || dab != dac != dbc){
    alert("Não é um triângulo isósceles");
}