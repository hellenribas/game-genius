const button = document.getElementById('button');
const point = document.getElementById('point-score');
const color1 = document.getElementById('color-0');
const color2 = document.getElementById('color-1');
const color3 = document.getElementById('color-2');
const color4 = document.getElementById('color-3');
let arrayColor = [];
let myArrayColor = [];
let gameStart = false;

const restart = () => {
  point.innerText = 0;
}

const selected = (numberColor) => {
  //função que adiciona a classe e depois de 0.8 segundo retira
  const element = document.getElementById(`color-${numberColor}`);
  element.classList.add('select');
  setTimeout(() => {element.classList.remove('select');}, 800);
}

const getColors = (array) => {
  //pega cada elemento do array e chama a função que adiciona a classe
  for(let i = 0; i < array.length; i += 1) {
    setTimeout(() => selected(array[i]), 1000 * i);
  }
}

const colorRandom = () => {
  return Math.floor(Math.random() * 4).toString();
}

const sum = () => {
  const count = Number(point.innerText) + 1;
  point.innerText = count;
}

const verify = () => {
  for (let i = 0; i < myArrayColor.length; i += 1) {
    if (myArrayColor[i] !== arrayColor[i]) {
      console.log(myArrayColor, arrayColor);
      return false;
    }
    // se forem iguais, soma
   sum();
   return true;
  }
}

const continueGame = () => {
  if (verify()) {
    if (arrayColor.length === myArrayColor.length) { // Se todos movimentos tiverem sido feitos
      play();
    } 
  } else {
    gameStart = false;
    point.innerText = 'Você perdeu';
  }
}

const pressColor = (event) => {
  //função chamada quando clica em uma cor
  if(!gameStart) {
    // se o jogo não começou, nãoa contece nada
    return false;
  }
  //se começou, pega o id e deixa só o número
  const colorClick = event.target.id;
  const number = colorClick.replace('color-', '');
  //puxa o número para o array de cores
  selected(number);
  myArrayColor.push(number);
  // função que verifica se o jogo deve continuar
  continueGame();
}

const play = () => { 
  //zerar meu array
  myArrayColor = [];
  //gera um número entre 0 e 3;
  const color = colorRandom();
  console.log(color);
  //coloca no array o número gerado
  arrayColor.push(color);
  //chama a função para colocar a classe que muda a cor
  getColors(arrayColor);
}

const start = () => {
  //cliquei o botão e zerei tudo
  button.innerText = 'Reiniciar';
  gameStart = true;
  point.innerText = 0;
  myArrayColor = [];
  arrayColor = [];
  //chamo a função de jogar
  play(); // const color = document.getElementById(`color-${identificador}`);
}

button.addEventListener('click', start);
color1.addEventListener('click', pressColor);
color2.addEventListener('click', pressColor);
color3.addEventListener('click', pressColor);
color4.addEventListener('click', pressColor);

