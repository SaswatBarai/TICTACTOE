const ticTac = document.querySelector(".ticTac");
const boxes = document.querySelectorAll(".box");
const h1 = document.querySelector("h1");
const btn = document.querySelector(".clr");
let currentPlayer = "X";

const winningCon = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function startGmae(e) {
    if (e.target.classList.contains("box") && e.target.textContent === "") {
        e.target.textContent = currentPlayer;

        if (currentPlayer === "X") {
            e.target.style.backgroundColor = "#61FF66"; 
        } else {
            e.target.style.backgroundColor = "#FF2323"; 
        }

        winner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function winner() {
    winningCon.forEach((item) => {
        const [index0, index1, index2] = item;
        const val0 = boxes[index0].textContent;
        const val1 = boxes[index1].textContent;
        const val2 = boxes[index2].textContent;

        if (val0 && val0 === val1 && val1 === val2) {
            h1.textContent = `Winner is ${val0}`;
            ticTac.removeEventListener("click", startGmae);
            setTimeout(clear, 1100);
        }
    });
}

function clear() {
    boxes.forEach((item) => {
        item.textContent = "";
        item.style.backgroundColor = "";
    });
    h1.textContent = "Play Tic Tac Toe";
    currentPlayer = "X";
    ticTac.addEventListener("click", startGmae);
}

ticTac.addEventListener("click", startGmae);
btn.addEventListener("click", () => {
    setTimeout(clear, 100);
});

function img(){
    window.open("https://saswat-barai.netlify.app/")
}