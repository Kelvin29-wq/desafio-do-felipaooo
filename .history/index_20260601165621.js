//"npm install prompt-sync" comando usado para instalar a biblioteca de prompt-sync, que permite ler entradas do usuário no terminal.
const prompt =  require('prompt-sync')();

//VAMOS AO NOSSO PROJETO!

console.log("------------- CLASSIFICADOR DE NÍVEL DE HERÓI --------------");

//Solicitando o nome do herói ao usuário
let nomeHeori = prompt("Digite o nome do Herói: ");

//Solicitando a quantidade de missões realizadas pelo herói
let missoesRealizadas = Number(prompt("Digite a quantidade de missões realizadas pelo Herói: "));

//Solicitando a quantridade de experiência do Herói(XP)
let experiencia = Number(prompt("Digie a quantidade de XP do Herói: "));

switch (experiencia) {


  
}