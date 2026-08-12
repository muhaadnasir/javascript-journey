const secretNum = Math.floor(Math.random() * 100) + 1;

let attempt = 0;

function getNum() {
    let input = document.getElementById("input");
    let num = Number(input.value);
    let result = document.getElementById("display");

    attempt++;

    if (secretNum == num) {
        result.textContent = "🎉 You got it! \n You found the number in " + attempt + " times";
    } else if (secretNum > num) {
        result.textContent = "Too low";
    } else if (secretNum < num) {
        result.textContent = "Too high";
    }

    input.value = "";
}