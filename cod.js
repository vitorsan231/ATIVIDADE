var button = document.getElementById('mega');

button.onclick = function() {
	var a = new Array();
	
	for(var i=0;i<6;i++){
		a[i] = Math.floor((Math.random() * 60) + 1);
		document.getElementById("paragrafo").innerHTML = a;
	}	
}
var button1 = document.getElementById('quina');

button1.onclick = function() {
	var a = new Array();
	
	for(var i=0;i<5;i++){
		a[i] = Math.floor((Math.random() * 80) + 1);
		document.getElementById("paragrafo").innerHTML = a;
	}	
}
var button2 = document.getElementById('lotomania');

button2.onclick = function() {
	var a = new Array();
	var ran = Math.floor((Math.random() * 15) + 1);
	for(var i=0;i<ran;i++){
		a[i] = Math.floor((Math.random() * 100) + 1);
		document.getElementById("paragrafo").innerHTML = a;
	}	
}
var button3 = document.getElementById('lotofacil');

button3.onclick = function() {
	var a = new Array();
	
	for(var i=0;i<15;i++){
		a[i] = Math.floor((Math.random() * 25) + 1);
		document.getElementById("paragrafo").innerHTML = a;
	}	
}
