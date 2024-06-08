let btn = document.querySelector(".buttons");
let userScore = document.querySelector("#user_counter");
let compScore = document.querySelector("#comp_counter");
let rock = document.querySelector("#rockc");
let paper = document.querySelector("#paperc");
let scissor = document.querySelector("#scissorc");
let resetBtn = document.querySelector("#button");

let player = 0;
let computer = 0;
let rockFlag = false;
let paperFlag = false;
let scissorFlag = false;

let choices = ["rock", "paper", "scissor"];

rock.classList.add("hide");
paper.classList.add("hide");
scissor.classList.add("hide");

// Just for testing purpose for github

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const compInput = () => {
  const idx = Math.floor(Math.random() * 3);
  return choices[idx];
};

const displayComp = (comp) => {
  if (comp == "rock") {
    rock.classList.remove("hide");
    rockFlag = true;
  } else if (comp == "paper") {
    paper.classList.remove("hide");
    paperFlag = true;
  } else if (comp == "scissor") {
    scissor.classList.remove("hide");
    scissorFlag = true;
  }
};

const removeComp = () => {
  if (rockFlag) {
    rock.classList.add("hide");
    rockFlag = false;
  }
  if (paperFlag) {
    paper.classList.add("hide");
    paperFlag = false;
  }
  if (scissorFlag) {
    scissor.classList.add("hide");
    scissorFlag = false;
  }
};

const playGame = (user) => {
  const comp = compInput();
  console.log(comp);
  removeComp();
  sleep(400).then(() => {
    displayComp(comp);
  });

  if (user == comp) {
    return;
  }

  if (user == "rock") {
    if (comp == "paper") {
      computer++;
    } else {
      player++;
    }
  } else if (user == "paper") {
    if (comp == "scissor") {
      computer++;
    } else {
      player++;
    }
  } else {
    if (comp == "rock") {
      computer++;
    } else {
      player++;
    }
  }
};

const updateScore = () => {
  userScore.innerText = player;
  compScore.innerText = computer;
};

btn.childNodes.forEach((image) => {
  image.addEventListener("click", () => {
    const user = image.getAttribute("id");
    playGame(user);
    sleep(550).then(() => {
      updateScore();
    });
  });
});

resetBtn.addEventListener("click", () => {
  player = 0;
  computer = 0;
  updateScore();
  if (rockFlag) {
    rock.classList.add("hide");
    rockFlag = false;
  }
  if (paperFlag) {
    paper.classList.add("hide");
    paperFlag = false;
  }
  if (scissorFlag) {
    scissor.classList.add("hide");
    scissorFlag = false;
  }
});
