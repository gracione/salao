var altura=0;
var largura=0;
var vidas=1;
var tempo=20;
var tempoNivel=0;
var nivel = window.location.search;
nivel = nivel.replace('?','');
if(nivel=="facil"){
	tempoNivel=2000
	var tempo=20;
}else if(nivel=="normal"){
	tempoNivel=1200
}else if(nivel=="dificil"){
	tempoNivel=800
}


function tamanhoDaTela(){
	altura=window.innerHeight;
	largura=window.innerWidth;
}
tamanhoDaTela();

var cronometro= setInterval(function(){
	tempo-=1;
	if(tempo<0){
		clearInterval(cronometro);
		clearInterval(criaMosta);
		window.location.href="vitoria.html";
	}else{
		document.getElementById('cronometro').innerHTML=tempo;
	}
},1000);

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

function randomica(){

	if(document.getElementById('mosca')){
		document.getElementById('mosca').remove();

		if(vidas>3){
			window.location.href="fimDeJogo.html"
		}
		else{
			document.getElementById('v'+vidas).src="coracao_vazio.png";
			vidas++;			
		}
	}

	var posicaoX = Math.floor(Math.random()*largura-90);
	var posicaoY = Math.floor(Math.random()*altura-90);
	console.log(posicaoX);

	//cria elemento html
	var mosca = document.createElement('img');
	mosca.src = 'mosca.png';
	mosca.className = tamanhoMosca()+' '+ladoMosca();
	mosca.style.left= posicaoX+"px";
	mosca.style.top= posicaoY+"px";
	mosca.style.position= "absolute";
	mosca.id='mosca';
	mosca.onclick = function() {
		this.remove();
	}
	document.body.appendChild(mosca);
}

function tamanhoMosca(){
	var classe = Math.floor(Math.random()*3)

	switch(classe){
		case 0:
			return 'mosca1'
		case 1:
			return 'mosca2'
		case 2:
			return 'mosca3'
	}
}
function ladoMosca(){
	var classe = Math.floor(Math.random()*2)

	switch(classe){
		case 0:
			return 'ladoA';
		case 1:
			return 'ladoB';
	}
}