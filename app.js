let answer = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkNumber() {
    let userGuess = document.getElementById("userInput").value;
    let message = document.getElementById("message");

    if (!userGuess) {
        message.textContent = "数字を入力してね。";
        return;
    }

    userGuess = Number(userGuess);
    attempts++;

    if (userGuess === answer) {
        message.textContent = `正解！ ${attempts} 回目で当たったわ！`;
    } else if (userGuess < answer) {
        message.textContent = "もっと大きい数字よ。";
    } else {
        message.textContent = "もっと小さい数字よ。";
    }
}

function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("userInput").value = "";
}
