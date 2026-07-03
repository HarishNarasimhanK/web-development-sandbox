function rollDice() {
    const nod = document.getElementById("numOfDice");
    const diceResult = document.getElementById("result");
    const di = document.getElementById("diceImage");

    const vals = [];
    const imgs = [];

    for (let i = 1; i <= nod.value; i++) {

        const val = Math.floor(Math.random() * 6) + 1
        vals.push(val);
        imgs.push(`<img src="dice-images/${val}.png" alt="dice ${val}">`);

    }
    diceResult.textContent = `dice: ${vals.join(', ')}`;
    di.innerHTML = imgs.join(' ');

}