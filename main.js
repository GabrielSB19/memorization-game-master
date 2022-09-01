let showCards = 0;
let card1 = null;
let card2 = null;
let firstResult = null;
let secondResult = null;
let attempts = 0;
let varHits = 0;
let temporizador = false;
let timer = 30;
let timeGame = null;

let move = document.getElementById("movimientos");
let hits = document.getElementById("aciertos");
let time = document.getElementById("t-restante")

let numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numbers = numbers.sort(() => {
    return Math.random() - 0.5;
});

const getTime = () => {
    timeGame = setInterval(() => {
        timer--;
        time.innerHTML = `Tiempo: ${timer} segundos`;
        if (timer == 0) {
            clearInterval(timeGame);
            blockCard();
            hits.innerHTML = "Perdiste Rata de mrd";
            time.innerHTML = "Perdiste Rata de mrd come queso";
        }
    }, 1000);
}

const blockCard = () => {
    for (let i = 0; i < 16; i++) {
        let ancleCard = document.getElementById(i);
        ancleCard.innerHTML = numbers[i];
        ancleCard.disabled = true;
    }
}

function destapar(id) {

    if (temporizador == false) {
        getTime();
        temporizador = true;
    }


    showCards++;
    if (showCards == 1) {
        card1 = document.getElementById(id);
        card1.innerHTML = numbers[id];
        firstResult = numbers[id];

        card1.disabled = true;
    } else if (showCards == 2) {
        card2 = document.getElementById(id);
        card2.innerHTML = numbers[id];
        secondResult = numbers[id];

        card2.disabled = true;
        attempts++;
        move.innerHTML = `Movimientos: ${attempts}`;

        if (firstResult == secondResult) {
            varHits++;
            hits.innerHTML = `Aciertos: ${varHits}`;
            showCards = 0;
            if (varHits == 8) {
                clearInterval(timeGame)
                hits.innerHTML = `Ganaste`;
                time.innerHTML = `Felicidades te demoraste ${(30 - timer)} Segundos`;
            }

        } else {
            setTimeout(() => {
                card1.innerHTML = " ";
                card2.innerHTML = " ";
                card1.disabled = false;
                card2.disabled = false;
                showCards = 0;
            }, 400);
        }
    }
}

