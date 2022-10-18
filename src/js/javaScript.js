let cell = document.querySelectorAll(".cell"),
  player1ScoreSpan = document.querySelector(".player1Score"),
  player2ScoreSpan = document.querySelector(".player2Score"),
  restart = document.querySelector(".restart");

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let player1 = [];
let player2 = [];

let score = {
  player1: 0,
  player2: 0,
};

let flag = true;

for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener("click", () => {
    if (flag) {
      addcellsPlayer1(i);
    } else {
      addcellsPlayer2(i);
    }
    checkwinner();
  });
}

const addcellsPlayer1 = (i) => {
  cell[i].innerHTML = "X";
  player1.push(i);
  flag = false;
};

const addcellsPlayer2 = (i) => {
  cell[i].innerHTML = "O";
  player2.push(i);
  flag = true;
};
const checkwinner = () => {
  winCombinations.find((item) => {
    if (item.filter((i) => player1.includes(i)).length === 3) {
      alert("Winner X player");
      score.player1++;
      drawScore();
      clearFun();
    } else if (item.filter((i) => player2.includes(i)).length === 3) {
      alert("Winner O player");
      score.player2++;
      drawScore();
      clearFun();
    }
  });
};
const drawScore = () => {
  player1ScoreSpan.innerHTML = "Player 1: " + score.player1;
  player2ScoreSpan.innerHTML = "Player 2: " + score.player2;
};
drawScore();

const clearFun = () => {
  for (let i = 0; i < cell.length; i++) {
    cell[i].innerHTML = "";
  }
  (player1 = []), (player2 = []);
  flag = true;
};

restart.addEventListener("click", () => {
  clearFun();
});
