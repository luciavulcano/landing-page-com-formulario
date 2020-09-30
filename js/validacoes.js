let erroEmail = document.querySelector('.mensagem-de-erro__email');

function validaEmail(email) {
  let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (regex.test(email) === false) {
    erroEmail.innerHTML = `
    <p>*Favor inserir um e-mail válido</p>
    `
    return false
  } else {
    erroEmail.innerHTML = `<p></p>`
    return true
  }
}

let erroNome = document.querySelector('.mensagem-de-erro__nome');

function validaNome(nome) {

  if (nome.length < 2) {
    erroNome.innerHTML = `
      <p>*Favor inserir um nome válido</p>
  `
    return false
  }
  else {
    erroNome.innerHTML = `<p></p>`
    return true
  }
}


let erroEmailDois = document.querySelector('.mensagem-de-erro__email-dois');

function validaEmailDois(email) {
  let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (regex.test(email) === false) {
    erroEmailDois.innerHTML = `
    <p>*Favor inserir um e-mail válido</p>
    `
    return false
  } else {
    erroEmailDois.innerHTML = `<p></p>`
    return true
  }
}

let erroNomeDois = document.querySelector('.mensagem-de-erro__nome-dois');

function validaNomeDois(nome) {

  if (nome.length < 2) {
    erroNomeDois.innerHTML = `
      <p>*Favor inserir um nome válido</p>
  `
    return false
  }
  else {
    erroNomeDois.innerHTML = `<p></p>`
    return true
  }
}