var xc=3;
var yc=2;
var xd=6;
var yd=4;
var d;

var c1 = xd-xc;
var c2 = yd-yc;

c1 = Math.pow(c1, 2);
c2 = Math.pow(c2, 2);

var c3 = c1+c2;

d = Math.sqrt(c3);

alert("A distância entre os pontos C e D é: "+d);
