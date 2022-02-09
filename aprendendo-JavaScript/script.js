/*
window.alert('Minha primeira mensagem')
window.confirm('Java Script') //Janela com botao Ok e Cancel...
var nome = window.prompt('Qual é seu nome?') //abre caixa de inserir
window.alert('É um prazer te conhecer,' + nome)
/*

/*
var n1 = Number(window.prompt('Digite um numero: '))
var n2 = Number(window.prompt('Digite outro numero: '))
var s = n1 + n2
window.alert(`A soma entre ${n1} mais ${n2} é igual a ${s}`)
*/

/*
var s = 'java script'
window.alert(s.toLowerCase('Java script'))
*/

var nome = window.prompt('Whats your name?')
document.writeln(
  `Olá <strong>${nome}</strong>. Seu nome tem ${nome.length} letras.<br/>`
)
document.writeln(`Seu nome em maiusculas é ${nome.toUpperCase()} <br/>`)
document.write(`Seu nome em minusculas é ${nome.toLowerCase()}`)
