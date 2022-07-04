// ao clicar no botão o jogo deve inicializar e o texto do botão tem que ser reiniciar

    //pegar botão

  const buttonStart = document.getElementById('button');
  const fatherColor = document.getElementById('container-game');
  const counter = document.getElementById('point-score');

  let arrayColors = [];
  let myArrayColors = [];
  let gameStarted = false;


  //gerar um número entre 0 e 3;
  function randomNumber() {
    const numeroAletorio = Math.floor(Math.random() * 4);
    return numeroAletorio.toString();
  }

  function colors(number) {
    const elemento = document.getElementById('color-' + number);
    elemento.classList.add('select');
    setTimeout(function() {
      elemento.classList.remove('select');
    }, 1000);
  }

  function lightColors(array) {
    //acender a luz
    for (let i = 0; i < array.length; i += 1) {
      // pegar o elemento
      colors(array[i]);
    }
  }

  function sum() {
    counter.innerText = Number(counter.innerText) + 1;
    console.log(counter);
  }

  function verifyArrays() {
    //se o elemento na posição indicada do arrayColors for igual ao elemento indicado pelo myArrayColors return true
    for (let i = 0; i < myArrayColors.length; i += 1) {
      if (myArrayColors[i] === arrayColors[i]) {
        sum();
      }
    }
    return false;
  }


  function play() {
    arrayColors = [];
    myArrayColors = [];
    gameStarted = true;
    const numero = randomNumber();
    arrayColors.push(numero);
    lightColors(arrayColors);
  }

  function clickColor(event) {
    console.log(event.target);
    const id = event.target.id;
    const numberColor = id.replace('color-', '');
    myArrayColors.push(numberColor);
    console.log(myArrayColors, arrayColors);
    colors(numberColor);
    verifyArrays();
  }


    //adicionou um evento de click

    buttonStart.addEventListener('click', play);
    fatherColor.addEventListener('click', clickColor);

    window.onload = function() {

    }