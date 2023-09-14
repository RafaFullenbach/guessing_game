// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const errorMenssage = "Digite um número de 1 a 10";
let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', handleResetEnter);

// funções
function handleTryClick(event) {
    event.preventDefault() // nao faca o padrao

    const inputNumber = document.querySelector("#inputNumber")
    if(inputNumber.value) {

        if(inputNumber.value >= 0 && inputNumber.value <= 10) {
            if(Number(inputNumber.value) == randomNumber) {
                toggleScreen()
                screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
            }

            inputNumber.value = ""
            xAttempts++

        } else {
            alert(errorMenssage)
        }

    } else {
        alert(errorMenssage)
    }
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleResetEnter(event) {
    if(event.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}