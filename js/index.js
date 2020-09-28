let botaoFormularioUm = document.querySelector('#primeiroBotao');
let inputValueNomeUm = document.querySelector('#inputNomeUm')
let inputValueEmailUm = document.querySelector('#inputEmailUm')

let arrayStorage = [];

botaoFormularioUm.addEventListener('click', function () {
  let nome = localStorage.setItem("nome", inputValueNomeUm.value)
  let email = localStorage.setItem("email", inputValueEmailUm.value)
  let cliente;
  if (arrayStorage === null) {
    arrayStorage === cliente === JSON.stringify({
      Nome: nome,
      Email: email
    });
    arrayStorage.push(cliente);
  }

});

let botaoFormularioDois = document.querySelector('#segundoBotao');
let inputValueNomeDois = document.querySelector('#inputNomeDois');
let inputValueEmailDois = document.querySelector('#inputEmailDois');

botaoFormularioDois.addEventListener('click', function () {
  localStorage.setItem("nome", inputValueNomeDois.value)
  localStorage.setItem("email", inputValueEmailDois.value)
});
