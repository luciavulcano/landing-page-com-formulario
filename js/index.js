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
  botaoFormularioUm.onclick = window.open('obrigado.html', '_blank');

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
  validaNome(nomeDois);
  validaEmail(emailDois);
  dadosArray.push(cliente);
  localStorage.setItem("tabelaClientes", dadosArray);
  mostraClientes();
  botaoFormularioDois.onclick = window.open('obrigado.html', '_blank');

});



function mostraClientes() {
  for (let i = 0; i < dadosArray.length; i++) {
    console.log(`nome:${dadosArray[i].nome}, e-mail:${dadosArray[i].email}`);
  }
}

let erroEmail = document.querySelector('.mensagem-de-erro__email');

function validaEmail(email) {
  let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (regex.test(email) === false) {
    return erroEmail.innerHTML = `
    <p>*Favor inserir um e-mail válido</p>
    `
  } else {
    return erroEmail.innerHTML = `<p></p>`
  }
}

let erroNome = document.querySelector('.mensagem-de-erro__nome');
function validaNome(nome) {

  if (nome.length < 2) {
    return erroNome.innerHTML = `
      <p>*Favor inserir um nome válido</p>
  `
  }
  else {
    return erroNome.innerHTML = `<p></p>`
  }
}



