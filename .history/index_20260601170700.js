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

//Classificnado o nível do Herói
switch (experiencia) {
    case experiencia < 1000:
      console.log("Nível do Herói: Ferro");
      break;

    case experiencia >= 1001 && experiencia <= 2000:
      console.log("Nível do Herói: Bronze");
      break;

    case experiencia >= 2001 && experiencia <= 5000:
      console.log("Nível do Herói: Prata")
      break;

    case experiencia >= 5001 && experiencia <= 7000:
      console.log("Nível do Herói: Ouro");
      break;

    case experiencia >= 7001 && experiencia <= 8000:
      console.log("Nível do Herói: Platina");
      break;

    case experiencia >= 8001 && experiencia <= 9000:
      console.log("Nível do Herói: Ascendente");
      break;

    case experiencia >= 9001 && experiencia <= 10000:
      console.log("Nível do Herói: Imortal");
      break;

    case experiencia > 10001:
      console.log("Nível do Herói: Radiante");
      break;

    default:
      console.log("XP inválida. Por favor, insira um valor válido.");
      break;
    


}

//Mennsagem 