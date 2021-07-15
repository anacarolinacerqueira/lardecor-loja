function comprar() {
  alert("O item não está disponível para compra no momento!");
}

function confirmarEnvio() {
	const text = "";
	const action = confirm("Deseja enviar a mensagem?");
	if(action == true){
		return
		alert("Mensagem enviada! Obrigado pelo contato :)");
	}
}

function perguntarEmail(){
	email = prompt("Deixe o seu melhor e-mail e faça parte da nossa lista de descontos exclusivos!");
}

function efeitoOver() {
  document.getElementById("produto-compra").style.width = "30.1%";
  document.getElementById("produto-compra").style.height = "35.1em";
  document.getElementById("produto-compra").style.opacity = "0.85";
}

function efeitoOut() {
  document.getElementById("produto-compra").style.width = "30%";
  document.getElementById("produto-compra").style.height = "35em";
  document.getElementById("produto-compra").style.opacity = "100%";
}

function transformaCaixaAlta() {
  var x = document.getElementById("text-nome");
  x.value = x.value.toUpperCase();
}

function corFundoMensagem() {
  document.getElementById("campo-mensagem").style.backgroundColor = "Moccasin";
}

function removeCorFundoMensagem() {
  document.getElementById("campo-mensagem").style.backgroundColor = "white";
}