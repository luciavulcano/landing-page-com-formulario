let botaoFormularioUm = document.querySelector('#primeiroBotao');
let inputValueNomeUm = document.querySelector('#inputNomeUm');
let inputValueEmailUm = document.querySelector('#inputEmailUm');

let dadosArray = [];

botaoFormularioUm.addEventListener("click", function (e) {
  e.preventDefault();
  let nomeUm = inputValueNomeUm.value;
  let emailUm = inputValueEmailUm.value;

  let cliente = {
    nome: nomeUm,
    email: emailUm
  }
  validaNome(nomeUm);
  validaEmail(emailUm);
  dadosArray.push(cliente);
  localStorage.setItem("tabelaClientes", dadosArray);
  mostraClientes();

  if (validaNome(nomeUm) === true && validaEmail(emailUm) === true) {
    botaoFormularioUm.onclick = window.open('obrigado.html', '_blank');
  } else {
    return false;
  }


});

let botaoFormularioDois = document.querySelector('#segundoBotao');
let inputValueNomeDois = document.querySelector('#inputNomeDois');
let inputValueEmailDois = document.querySelector('#inputEmailDois');

botaoFormularioDois.addEventListener("click", function (e) {
  e.preventDefault();
  let nomeDois = inputValueNomeDois.value;
  let emailDois = inputValueEmailDois.value;

  let cliente = {
    nome: nomeDois,
    email: emailDois
  }

  validaNomeDois(nomeDois);
  validaEmailDois(emailDois);

  dadosArray.push(cliente);
  localStorage.setItem("tabelaClientes", dadosArray);
  mostraClientes();

  if (validaNome(nomeDois) === true && validaEmail(emailDois) === true) {
    botaoFormularioUm.onclick = window.open('obrigado.html', '_blank');
  } else {
    return false;
  }

});

function mostraClientes() {
  for (let i = 0; i < dadosArray.length; i++) {
    console.log(`nome:${dadosArray[i].nome}, e-mail:${dadosArray[i].email}`);
  }
}





