//"npm install prompt-sync" comando usado para instalar a biblioteca de prompt-sync, que permite ler entradas do usuário no terminal.
const prompt = require('prompt-sync')();

//VAMOS AO NOSSO PROJETO!

console.log("------------- CLASSIFICADOR DE NÍVEL DE HERÓI --------------");


//Solicitando o nome do herói ao usuário
let nomeHeroi = prompt("Digite o nome do Herói: ");

//Solicitando a quantidade de missões realizadas pelo herói
let missoesRealizadas = Number(prompt("Digite a quantidade de missões realizadas pelo Herói: "));

//Solicitando a quantridade de experiência do Herói(XP)
let experiencia = Number(prompt("Digie a quantidade de XP do Herói: "));

//Classificnado o nível do Herói

if(experiencia < 1000){
  console.log("Nível do Herói: Ferro");
} else if (experiencia >= 1001 && experiencia <= 2000){
  console.log("Nível do Herói: Bronze");
} else if (experiencia >= 2001 && experiencia <= 5000){
  console.log("Nível do Herói: Prata");
} else if (experiencia >= 5001 && experiencia <= 7000){
  console.log("Nível do Herói: Ouro");
} else if (experiencia >= 7001 && experiencia <= 8000){
  console.log("Nível do Herói: Platina");
} else if (experiencia >= 8001 && experiencia <= 9000){ 
  console.log("Nível do Herói: Ascendente");
} else if (experiencia >= 9001 && experiencia <= 10000){
  console.log("Nível do Herói: Imortal");
}else if (experiencia > 10000){
  console.log("Nível do Herói: Radiante");
}

//Mensagem Final
console.log(`O Herói de nome ${nomeHeroi}, com ${Missvel de ${experiencia} `);