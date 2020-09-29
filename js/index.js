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

  dadosArray.push(cliente);
  localStorage.setItem("tabelaClientes", dadosArray);

  function mostraClientes() {

    for (let i = 0; i < dadosArray.length; i++) {
      console.log(dadosArray[i].nome + " " + dadosArray[i].email);
    }
  }
  mostraClientes();

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

  dadosArray.push(cliente);
  localStorage.setItem("tabelaClientes", dadosArray);

  function mostraClientes() {

    for (let i = 0; i < dadosArray.length; i++) {
      console.log(dadosArray[i].nome + " " + dadosArray[i].email);
    }
  }
  mostraClientes();

});




