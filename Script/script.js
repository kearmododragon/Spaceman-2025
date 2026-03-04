// Word & Theme Data
const wordList = [
  // FOOD (20)
  { category: "food", difficulty: "easy", clue: "Red fruit", word: "apple" },
  { category: "food", difficulty: "easy", clue: "Yellow fruit", word: "banana" },
  { category: "food", difficulty: "easy", clue: "Breakfast grain", word: "oats" },
  { category: "food", difficulty: "easy", clue: "Dairy drink", word: "milk" },
  { category: "food", difficulty: "easy", clue: "Orange vegetable", word: "carrot" },
  { category: "food", difficulty: "medium", clue: "Italian noodle", word: "spaghetti" },
  { category: "food", difficulty: "medium", clue: "Green vegetable", word: "broccoli" },
  { category: "food", difficulty: "medium", clue: "Mexican wrap", word: "burrito" },
  { category: "food", difficulty: "medium", clue: "Asian dumpling", word: "gyoza" },
  { category: "food", difficulty: "medium", clue: "Fried potato", word: "french fries" },
  { category: "food", difficulty: "hard", clue: "Italian pie", word: "pizza" },
  { category: "food", difficulty: "hard", clue: "Japanese noodles", word: "udon" },
  { category: "food", difficulty: "hard", clue: "Fermented cabbage", word: "sauerkraut" },
  { category: "food", difficulty: "hard", clue: "Middle Eastern dip", word: "hummus" },
  { category: "food", difficulty: "hard", clue: "Spiced rice dish", word: "biryani" },
  { category: "food", difficulty: "hard", clue: "Raw fish dish", word: "sashimi" },
  { category: "food", difficulty: "hard", clue: "Korean side dish", word: "kimchi" },
  { category: "food", difficulty: "hard", clue: "French pastry", word: "croissant" },
  { category: "food", difficulty: "hard", clue: "Swiss cheese", word: "gruyere" },
  { category: "food", difficulty: "hard", clue: "Thai soup", word: "tom yum" },

  // PLACES (20)
  { category: "places", difficulty: "easy", clue: "US city", word: "chicago" },
  { category: "places", difficulty: "easy", clue: "UK capital", word: "london" },
  { category: "places", difficulty: "easy", clue: "Desert city", word: "phoenix" },
  { category: "places", difficulty: "easy", clue: "Beach state", word: "florida" },
  { category: "places", difficulty: "medium", clue: "Italian city", word: "florence" },
  { category: "places", difficulty: "medium", clue: "Canadian city", word: "vancouver" },
  { category: "places", difficulty: "medium", clue: "Australian city", word: "adelaide" },
  { category: "places", difficulty: "medium", clue: "Spanish capital", word: "madrid" },
  { category: "places", difficulty: "medium", clue: "Japanese city", word: "osaka" },
  { category: "places", difficulty: "hard", clue: "Czech capital", word: "prague" },
  { category: "places", difficulty: "hard", clue: "Iceland capital", word: "reykjavik" },
  { category: "places", difficulty: "hard", clue: "Moroccan city", word: "marrakech" },
  { category: "places", difficulty: "hard", clue: "Ancient city", word: "persepolis" },
  { category: "places", difficulty: "hard", clue: "Indian city", word: "kochi" },
  { category: "places", difficulty: "hard", clue: "Turkish city", word: "izmir" },
  { category: "places", difficulty: "hard", clue: "Greek island", word: "zakynthos" },
  { category: "places", difficulty: "hard", clue: "Chilean desert", word: "atacama" },
  { category: "places", difficulty: "hard", clue: "Peruvian site", word: "machu picchu" },
  { category: "places", difficulty: "hard", clue: "Mongolian capital", word: "ulaanbaatar" },

  // PEOPLE (20)
  { category: "people", difficulty: "easy", clue: "First US president", word: "george washington" },
  { category: "people", difficulty: "easy", clue: "Famous singer", word: "madonna" },
  { category: "people", difficulty: "easy", clue: "Tech billionaire", word: "elon musk" },
  { category: "people", difficulty: "easy", clue: "Civil rights leader", word: "martin luther king jr" },
  { category: "people", difficulty: "easy", clue: "Cartoon sailor", word: "popeye" },
  { category: "people", difficulty: "medium", clue: "Renaissance artist", word: "michelangelo buonarroti" },
  { category: "people", difficulty: "medium", clue: "Scientist of gravity", word: "isaac newton" },
  { category: "people", difficulty: "medium", clue: "Roman ruler", word: "julius caesar" },
  { category: "people", difficulty: "medium", clue: "Fictional detective", word: "sherlock holmes" },
  { category: "people", difficulty: "medium", clue: "Greek philosopher", word: "plato" },
  { category: "people", difficulty: "hard", clue: "Composer", word: "pyotr tchaikovsky" },
  { category: "people", difficulty: "hard", clue: "Surrealist artist", word: "salvador dali" },
  { category: "people", difficulty: "hard", clue: "Mathematician", word: "leonardo fibonacci" },
  { category: "people", difficulty: "hard", clue: "Ancient general", word: "hannibal barca" },
  { category: "people", difficulty: "hard", clue: "Poet", word: "t s elliot" },
  { category: "people", difficulty: "hard", clue: "Mythical hero", word: "achilles" },
  { category: "people", difficulty: "hard", clue: "Norse god", word: "odin" },
  { category: "people", difficulty: "hard", clue: "Egyptian queen", word: "cleopatra" },
  { category: "people", difficulty: "hard", clue: "Russian author", word: "fyodor dostoevsky" },
  { category: "people", difficulty: "hard", clue: "German philosopher", word: "friedrich nietzsche" },

  // SPORTS (20)
  { category: "sports", difficulty: "easy", clue: "Bat and ball", word: "baseball" },
  { category: "sports", difficulty: "easy", clue: "Kicking game", word: "soccer" },
  { category: "sports", difficulty: "easy", clue: "Olympic race", word: "sprint" },
  { category: "sports", difficulty: "easy", clue: "Court game", word: "tennis" },
  { category: "sports", difficulty: "easy", clue: "Ice sport", word: "hockey" },
  { category: "sports", difficulty: "medium", clue: "Martial art", word: "taekwondo" },
  { category: "sports", difficulty: "medium", clue: "Winter sliding", word: "bobsled" },
  { category: "sports", difficulty: "medium", clue: "Cue sport", word: "billiards" },
  { category: "sports", difficulty: "medium", clue: "Combat sport", word: "wrestling" },
  { category: "sports", difficulty: "medium", clue: "Water race", word: "rowing" },
  { category: "sports", difficulty: "hard", clue: "Extreme climbing", word: "mountaineering" },
  { category: "sports", difficulty: "hard", clue: "Japanese wrestling", word: "sumo" },
  { category: "sports", difficulty: "hard", clue: "Board sailing", word: "windsurfing" },
  { category: "sports", difficulty: "hard", clue: "Equestrian sport", word: "dressage" },
  { category: "sports", difficulty: "hard", clue: "Track cycling", word: "keirin" },
  { category: "sports", difficulty: "hard", clue: "Ice stone sport", word: "curling" },
  { category: "sports", difficulty: "hard", clue: "Motor racing", word: "motogp" },
  { category: "sports", difficulty: "hard", clue: "French ball game", word: "petanque" },
  { category: "sports", difficulty: "hard", clue: "Highland sport", word: "cabertoss" },
  { category: "sports", difficulty: "hard", clue: "Winter endurance", word: "biathlon" },

  // ANIMALS (20)
  { category: "animals", difficulty: "easy", clue: "Farm animal", word: "cow" },
  { category: "animals", difficulty: "easy", clue: "Loyal pet", word: "dog" },
  { category: "animals", difficulty: "easy", clue: "Striped cat", word: "tiger" },
  { category: "animals", difficulty: "easy", clue: "Jungle king", word: "lion" },
  { category: "animals", difficulty: "easy", clue: "Long neck", word: "giraffe" },
  { category: "animals", difficulty: "medium", clue: "Australian hopper", word: "kangaroo" },
  { category: "animals", difficulty: "medium", clue: "Arctic bear", word: "polar bear" },
  { category: "animals", difficulty: "medium", clue: "Slow climber", word: "sloth" },
  { category: "animals", difficulty: "medium", clue: "Smart marine mammal", word: "dolphin" },
  { category: "animals", difficulty: "medium", clue: "Night bird", word: "owl" },
  { category: "animals", difficulty: "hard", clue: "Egg laying mammal", word: "platypus" },
  { category: "animals", difficulty: "hard", clue: "African antelope", word: "wildebeest" },
  { category: "animals", difficulty: "hard", clue: "Spotted wild cat", word: "ocelot" },
  { category: "animals", difficulty: "hard", clue: "Armored mammal", word: "pangolin" },
  { category: "animals", difficulty: "hard", clue: "Nocturnal primate", word: "aye aye" },
  { category: "animals", difficulty: "hard", clue: "Large flightless bird", word: "cassowary" },
  { category: "animals", difficulty: "hard", clue: "Desert fox", word: "fennec" },
  { category: "animals", difficulty: "hard", clue: "Poison frog family", word: "dendrobatid" },
  { category: "animals", difficulty: "hard", clue: "Deep sea shark", word: "goblin shark" },
  { category: "animals", difficulty: "hard", clue: "Ancient fish", word: "coelacanth" },

  // CHARACTERS (20)
  { category: "characters", difficulty: "easy", clue: "pokemon mascot", word: "pikachu" },
  { category: "characters", difficulty: "easy", clue: "yellow sponge", word: "spongebob" },
  { category: "characters", difficulty: "easy", clue: "pokemon trainer", word: "ash ketchum" },
  { category: "characters", difficulty: "easy", clue: "office manager", word: "michael scott" },
  { category: "characters", difficulty: "easy", clue: "blue hedgehog", word: "sonic" },
  { category: "characters", difficulty: "medium", clue: "paper salesman", word: "dwight schrute" },
  { category: "characters", difficulty: "medium", clue: "pokemon villain", word: "jessie" },
  { category: "characters", difficulty: "medium", clue: "sitcom neighbor", word: "kramer" },
  { category: "characters", difficulty: "medium", clue: "cartoon dad", word: "homer simpson" },
  { category: "characters", difficulty: "medium", clue: "anime pirate", word: "luffy" },
  { category: "characters", difficulty: "hard", clue: "pokemon villain leader", word: "giovanni" },
  { category: "characters", difficulty: "hard", clue: "office temp", word: "ryan" },
  { category: "characters", difficulty: "hard", clue: "Zombie killer", word: "rick grimes" },
  { category: "characters", difficulty: "hard", clue: "sitcom neurotic", word: "george costanza" },
  { category: "characters", difficulty: "hard", clue: "pokemon rival", word: "gary oak" },
  { category: "characters", difficulty: "hard", clue: "anime ninja", word: "kakashi" },
  { category: "characters", difficulty: "hard", clue: "cartoon villain", word: "mojojojo" },
  { category: "characters", difficulty: "hard", clue: "office accountant", word: "kevin" },
  { category: "characters", difficulty: "hard", clue: "pokemon professor", word: "oak" },
  { category: "characters", difficulty: "hard", clue: "animated horse", word: "bojack horseman" }
];

const themeList = ["space", "western", "nature", "invaders"];

// DOM Elements
const categorySelect = document.getElementById("category-select");
const difficultySelect = document.getElementById("difficulty-select");
const themeSelect = document.getElementById("theme-select");

const lettersEl = document.getElementById("letters");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const gameBoard = document.getElementById("game-board");
const startScreen = document.getElementById("start-screen");
const endGame = document.getElementById("end-game");
const endGameMessageEl = document.getElementById("endGameMessage");
const wordRevealEl = document.getElementById("wordReveal");
const clueTextEl = document.getElementById("clue-text");
const livesTextEl = document.getElementById("lives-remaining");
const wordDisplayEl = document.getElementById("masked-word");
const gunshotSound = new Audio("sounds/western/gun.mp3");

// Game Config
const clueRevealLives = 2;

let gameOver = false;
let lives = 7;

let currentWordObj = null;
let currentWord = "";
let maskedWord = [];
let guessedLetters = [];

let petals = [];

let invaderStep = 0;

// Derived Data
const categories = [...new Set(wordList.map(word => word.category))];
const difficulties = [...new Set(wordList.map(word => word.difficulty))];
const themes = [...new Set(themeList)];

// Initialize Select Options
function populateSelectOptions() {
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  difficulties.forEach(difficulty => {
    const option = document.createElement("option");
    option.value = difficulty;
    option.textContent = difficulty;
    difficultySelect.appendChild(option);
  });

  themes.forEach(theme => {
    const option = document.createElement("option");
    option.value = theme.toLowerCase();
    option.textContent = theme;
    themeSelect.appendChild(option);
  });
  checkStartButtonStatus();
}
populateSelectOptions();

// Game Functions
function checkStartButtonStatus() {
  const themeSelected = themeSelect.value && themeSelect.value !== "";
  const categorySelected = categorySelect.value && categorySelect.value !== "";
  const difficultySelected = difficultySelect.value && difficultySelect.value !== "";
  startBtn.disabled = !(categorySelected && difficultySelected && themeSelected);

}
function startGame() {
  // Reset game state
  gameOver = false;
  lives = 7;
  guessedLetters = [];
  maskedWord = [];
  invaderStep = 0;
  wordDisplayEl.style.transform = "translateY(0px)"

  // Reset letter buttons
  const letterButtons = lettersEl.querySelectorAll("button");
  letterButtons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("hidden");
  });

  // Hide start screen and show game board
  startScreen.classList.add("hidden");
  gameBoard.classList.remove("hidden");
  gameBoard.classList.remove(...themeList);

  // Read user selections
  let selectedCategory = categorySelect.value;
  let selectedDifficulty = difficultySelect.value;
  let selectedTheme = themeSelect.value;

  if (selectedCategory === "random") {
    selectedCategory = categories[Math.floor(Math.random() * categories.length)];
  }
  if (selectedDifficulty === "random") {
    selectedDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
  }
  if (selectedTheme === "random") {
    selectedTheme = themes[Math.floor(Math.random() * themes.length)];
  }

  if (selectedTheme) {
    gameBoard.classList.add(selectedTheme);
  }

  const themeCharacter = document.getElementById("theme-character");
  themeCharacter.classList.add("hidden"); // Hide by default
  themeCharacter.classList.remove("fly-away", "win-grow"); // reset any previous animations

  if (selectedTheme === "space") {
    themeCharacter.src = "imgs/space/spaceman.png";
    themeCharacter.alt = "spaceman";
    themeCharacter.classList.remove("hidden");
  } else if (selectedTheme === "western") {
    themeCharacter.src = "imgs/western/cowboy.png";
    themeCharacter.alt = "cowboy on horse";
    themeCharacter.classList.remove("hidden");
  } else if (selectedTheme === "nature") {
    themeCharacter.src = "imgs/nature/flower.png";
    themeCharacter.alt = "Flower stem";
    themeCharacter.classList.remove("hidden");
    createPetals();
  } else {
    themeCharacter.classList.add("hidden");
  }

  // Filter words
  const filteredWords = wordList.filter(
    wordObj => wordObj.category === selectedCategory && wordObj.difficulty === selectedDifficulty
  );

  if (filteredWords.length === 0) return;

  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  currentWordObj = filteredWords[randomIndex];
  currentWord = currentWordObj.word.toUpperCase();
  maskedWord = currentWord.split("").map(char => {
    return /[A-Z]/.test(char) ? "_" : char;
  });

  // Update displays
  updateMaskedWordDisplay();
  updateClue();
  updateLivesDisplay();
}

function updateClue() {
  const livesUntilReveal = lives - clueRevealLives;
  if (lives > clueRevealLives) {
    clueTextEl.textContent = `Lives left for reveal: ${livesUntilReveal}`;
  } else {
    clueTextEl.textContent = currentWordObj.clue;
  }
}

function letterCheck(letter) {
  if (gameOver) return;
console.log("Lives now:", lives);
  let foundMatch = false;

  // Reveal matching letters
  for (let i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === letter) {
      maskedWord[i] = letter;
      foundMatch = true;
    }
  }

  if (!foundMatch) {
    lives--;
    updateLivesDisplay();
    updateClue();
    if (gameBoard.classList.contains("invaders")) {
      invaderStep ++;
      moveInvadersDown();
    }

    // 🌸 Nature petal drop
    if (gameBoard.classList.contains("nature")) {
      const petalIndex = 7 - (lives + 1);
      dropPetal(petalIndex);
    }

    // 💀 LOSS CONDITION
    if (lives === 0) {
      gameOver = true;

setTimeout(() => {
  console.log("LOSS TRIGGERED");
checkWinCondition()
}, 1000);



      return; 
    }
  }

  updateMaskedWordDisplay();

  if (!gameOver) {
    checkWinCondition();
  }
}

function updateMaskedWordDisplay() {
  if (gameBoard.classList.contains("invaders")) {
    let html = "";
    maskedWord.forEach(char => {
      if (char === "_") {
        html += `<img src="imgs/invaders/invader.png" class="invader">`;
      } else {
        html += `<span class="revealed-letter">${char}</span>`;
      }
    });
    wordDisplayEl.innerHTML = html;
  } else {
    wordDisplayEl.textContent = maskedWord.join(" ");
  }
}

function updateLivesDisplay() {
  livesTextEl.textContent = `${lives}`;
}

function checkWinCondition() {
  const wordGuessed = !maskedWord.includes("_");

  if (lives <= 0 || wordGuessed) {
    gameOver = true;

    endGameMessageEl.textContent = wordGuessed ? "Well done, my guy!" : "Game Over!";
    wordRevealEl.textContent = `The word was: ${currentWord}`;

    const character = document.getElementById("theme-character");

    if (gameBoard.classList.contains("space")) {
      if (wordGuessed) {
        character.classList.add("win-grow");

        setTimeout(() => {
          gameBoard.classList.add("hidden");
          endGame.classList.remove("hidden");
          character.classList.remove("win-grow"); // reset
        }, 1200);
      } else {
        character.classList.add("fly-away");

        setTimeout(() => {
          gameBoard.classList.add("hidden");
          endGame.classList.remove("hidden");
          character.classList.remove("fly-away"); // reset
        }, 2000);
      }

    } else if (gameBoard.classList.contains("western")) {
      if (wordGuessed) {
        character.classList.add("cowboy-win");

        setTimeout(() => {
          gameBoard.classList.add("hidden");
          endGame.classList.remove("hidden");
          character.classList.remove("cowboy-win"); // reset
        }, 1500);
      } else {
        character.classList.add("cowboy-lose");

        setTimeout(() => {
          gameBoard.classList.add("hidden");
          endGame.classList.remove("hidden");
          character.classList.remove("cowboy-lose"); // reset
        }, 2000);
      }

    } else {
      // OTHER NON-SPACE/NON-WESTERN THEMES
      gameBoard.classList.add("hidden");
      endGame.classList.remove("hidden");
    }
  }
}

function resetGameUI() {
  startScreen.classList.remove("hidden");
  gameBoard.classList.add("hidden");
  endGame.classList.add("hidden");
  gameBoard.classList.remove(...themes);
  checkStartButtonStatus();
    const allPetals = gameBoard.querySelectorAll(".petal");
    allPetals.forEach(p => p.remove());

  // Reset all letter buttons
  const letterButtons = lettersEl.querySelectorAll("button");
  letterButtons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("disabled");
  });
}

function createPetals(){
  if (!gameBoard.classList.contains("nature")) return;

petals = [];

const flower = document.getElementById("theme-character");

const flowerRect = flower.getBoundingClientRect();
const boardRect = gameBoard.getBoundingClientRect();

// center relative to gameBoard
const centerX = (flowerRect.left + flowerRect.width / 2) - boardRect.left -45;
const centerY = (flowerRect.top + flowerRect.height / 30) - boardRect.top;
 // adjust as needed to the top of the flower

const radius = 80;



const oldPetals = gameBoard.querySelectorAll(".petal");
oldPetals.forEach(p => p.remove());

for (let i = 0; i < 7; i++) {
  const petal = document.createElement("img");
  petal.src = "imgs/nature/petal.png";
  petal.classList.add("petal")
  petal.dataset.index = i;

  const angle = (i/7) * (Math.PI *2);
  const angleDeg = angle * (180 / Math.PI);

  const x = centerX + Math.cos(angle) * radius;
  const y = centerY + Math.sin(angle) * radius;

  petal.style.position = "absolute";
  petal.style.zIndex = "2";
  petal.style.left = `${x}px`;
  petal.style.top = `${y}px`;

  petal.style.transform = `rotate(${angleDeg + 90}deg)`;


  
  gameBoard.appendChild(petal);
  petals.push(petal);
}
positionPetals();
}

function positionPetals() {
    const flower = document.getElementById("theme-character");
    const flowerRect = flower.getBoundingClientRect();
    const boardRect = gameBoard.getBoundingClientRect();

    // Center coordinates relative to gameBoard
    const centerX = (flowerRect.left + flowerRect.width / 2) - boardRect.left;
    const centerY = (flowerRect.top + flowerRect.height / 4) - boardRect.top; // adjust height to top of flower

    const radius = 80; // distance from center

    petals.forEach((petal, i) => {
        const angle = (i / petals.length) * (Math.PI * 2);
        const angleDeg = angle * (180 / Math.PI);

        const x = centerX + Math.cos(angle) * radius - petal.width / 2; // center petal
        const y = centerY + Math.sin(angle) * radius - petal.height / 2;

        petal.style.left = `${x}px`;
        petal.style.top = `${y}px`;
        petal.style.transform = `rotate(${angleDeg + 90}deg)`;
    });
}

function dropPetal(lifeIndex, onComplete) {
    const petal = petals[lifeIndex];
    if (!petal) {
        if (onComplete) onComplete();
        return;
    }

    // Set CSS variables for starting position
    petal.style.setProperty('--start-top', `${petal.offsetTop}px`);
    petal.style.setProperty('--start-left', `${petal.offsetLeft}px`);

    // Trigger animation
    petal.classList.add('falling');

    // Listen for animation end
    petal.addEventListener('animationend', () => {
        petal.style.display = 'none';
        if (onComplete) onComplete();
    }, { once: true });
}

function moveInvadersDown() {
  requestAnimationFrame(() => {
    const maxSteps = 7;
    const dropDistance = calculateDropDistance();
    const stepSize = dropDistance / maxSteps;
    const newPosition = invaderStep * stepSize;

    wordDisplayEl.style.transform = `translateY(${newPosition}px)`;
  });
}

function calculateDropDistance() {
  const invaderRect = wordDisplayEl.getBoundingClientRect();
  const livesEl = document.getElementById("lives");
  const livesRect = livesEl.getBoundingClientRect();

  // Always measure distance
  const distance = livesRect.top - invaderRect.bottom;

  return distance;
}

// Reposition petals if window is resized
window.addEventListener("resize", () => {
    if (petals && petals.length > 0) {
        positionPetals();
    }
});

// Event Listeners
startBtn.addEventListener("click", startGame);

lettersEl.addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;

  const letter = e.target.id;

  // Always disable the button
  e.target.disabled = true;

  // Show bullet overlay if Western theme
  if (gameBoard.classList.contains("western")) {
    gunshotSound.currentTime = 0;
    gunshotSound.play();
    e.target.classList.add("disabled");
  }

  letterCheck(letter);
});
resetBtn.addEventListener("click", resetGameUI);
categorySelect.addEventListener("change", checkStartButtonStatus);
difficultySelect.addEventListener("change", checkStartButtonStatus);
themeSelect.addEventListener("change", checkStartButtonStatus);

document.fonts.ready.then(() => {
  document.getElementById("start-screen").classList.remove("hidden");
});
