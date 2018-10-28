function unique(value, index, self) { 
    return self.indexOf(value) === index;
}
var button = document.getElementById('mega');
button.onclick = function() {
	var aposta = [];
	var a = new Array();
	var endereco = 0;
	while (aposta.length != 6){
		a[endereco] = Math.floor((Math.random() * 60) + 1);
		endereco ++;
		var aposta = a.filter(unique);
	}	
	document.getElementById("paragrafo").innerHTML = aposta;
}
var button1 = document.getElementById('quina');
button1.onclick = function() {
	var aposta = [];
	var a = new Array();
	var endereco = 0;
	while (aposta.length != 5){
		a[endereco] = Math.floor((Math.random() * 80) + 1);
		endereco ++;
		var aposta = a.filter(unique);
	}	
	document.getElementById("paragrafo").innerHTML = aposta;	
}
var button2 = document.getElementById('lotomania');
button2.onclick = function() {
	var aposta = [];
	var a = new Array();
	var endereco = 0;
	while (aposta.length != 50){
		a[endereco] = Math.floor((Math.random() * 99) + 1);
		endereco ++;
		var aposta = a.filter(unique);
	}	
	document.getElementById("paragrafo").innerHTML = aposta;	
}
var button3 = document.getElementById('lotofacil');
button3.onclick = function() {
	var aposta = [];
	var a = new Array();
	var endereco = 0;
	while (aposta.length != 15){
		a[endereco] = Math.floor((Math.random() * 25) + 1);
		endereco ++;
		var aposta = a.filter(unique);
	}	
	document.getElementById("paragrafo").innerHTML = aposta;	
}
