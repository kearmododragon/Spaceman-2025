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
  { category: "food", difficulty: "medium", clue: "Fried potato", word: "frenchfries" },
  { category: "food", difficulty: "hard", clue: "Italian pie", word: "pizza" },
  { category: "food", difficulty: "hard", clue: "Japanese noodles", word: "udon" },
  { category: "food", difficulty: "hard", clue: "Fermented cabbage", word: "sauerkraut" },
  { category: "food", difficulty: "hard", clue: "Middle Eastern dip", word: "hummus" },
  { category: "food", difficulty: "hard", clue: "Spiced rice dish", word: "biryani" },
  { category: "food", difficulty: "hard", clue: "Raw fish dish", word: "sashimi" },
  { category: "food", difficulty: "hard", clue: "Korean side dish", word: "kimchi" },
  { category: "food", difficulty: "hard", clue: "French pastry", word: "croissant" },
  { category: "food", difficulty: "hard", clue: "Swiss cheese", word: "gruyere" },
  { category: "food", difficulty: "hard", clue: "Thai soup", word: "tomyum" },
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
  { category: "places", difficulty: "hard", clue: "Peruvian site", word: "machupicchu" },
  { category: "places", difficulty: "hard", clue: "Mongolian capital", word: "ulaanbaatar" },
  // PEOPLE (20)
  { category: "people", difficulty: "easy", clue: "First US president", word: "washington" },
  { category: "people", difficulty: "easy", clue: "Famous singer", word: "madonna" },
  { category: "people", difficulty: "easy", clue: "Tech billionaire", word: "musk" },
  { category: "people", difficulty: "easy", clue: "Civil rights leader", word: "king" },
  { category: "people", difficulty: "easy", clue: "Cartoon sailor", word: "popeye" },
  { category: "people", difficulty: "medium", clue: "Renaissance artist", word: "michelangelo" },
  { category: "people", difficulty: "medium", clue: "Scientist of gravity", word: "newton" },
  { category: "people", difficulty: "medium", clue: "Roman ruler", word: "caesar" },
  { category: "people", difficulty: "medium", clue: "Fictional detective", word: "sherlock" },
  { category: "people", difficulty: "medium", clue: "Greek philosopher", word: "plato" },
  { category: "people", difficulty: "hard", clue: "Composer", word: "tchaikovsky" },
  { category: "people", difficulty: "hard", clue: "Surrealist artist", word: "dali" },
  { category: "people", difficulty: "hard", clue: "Mathematician", word: "fibonacci" },
  { category: "people", difficulty: "hard", clue: "Ancient general", word: "hannibal" },
  { category: "people", difficulty: "hard", clue: "Poet", word: "ts elliot" },
  { category: "people", difficulty: "hard", clue: "Mythical hero", word: "achilles" },
  { category: "people", difficulty: "hard", clue: "Norse god", word: "odin" },
  { category: "people", difficulty: "hard", clue: "Egyptian queen", word: "cleopatra" },
  { category: "people", difficulty: "hard", clue: "Russian author", word: "dostoevsky" },
  { category: "people", difficulty: "hard", clue: "German philosopher", word: "nietzsche" },
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
  { category: "animals", difficulty: "medium", clue: "Arctic bear", word: "polar" },
  { category: "animals", difficulty: "medium", clue: "Slow climber", word: "sloth" },
  { category: "animals", difficulty: "medium", clue: "Smart marine mammal", word: "dolphin" },
  { category: "animals", difficulty: "medium", clue: "Night bird", word: "owl" },
  { category: "animals", difficulty: "hard", clue: "Egg laying mammal", word: "platypus" },
  { category: "animals", difficulty: "hard", clue: "African antelope", word: "wildebeest" },
  { category: "animals", difficulty: "hard", clue: "Spotted wild cat", word: "ocelot" },
  { category: "animals", difficulty: "hard", clue: "Armored mammal", word: "pangolin" },
  { category: "animals", difficulty: "hard", clue: "Nocturnal primate", word: "ayeaye" },
  { category: "animals", difficulty: "hard", clue: "Large flightless bird", word: "cassowary" },
  { category: "animals", difficulty: "hard", clue: "Desert fox", word: "fennec" },
  { category: "animals", difficulty: "hard", clue: "Poison frog family", word: "dendrobatid" },
  { category: "animals", difficulty: "hard", clue: "Deep sea shark", word: "goblinshark" },
  { category: "animals", difficulty: "hard", clue: "Ancient fish", word: "coelacanth" },
  // CHARACTERS (20)
  { category: "characters", difficulty: "easy", clue: "pokemon mascot", word: "pikachu" },
  { category: "characters", difficulty: "easy", clue: "yellow sponge", word: "spongebob" },
  { category: "characters", difficulty: "easy", clue: "pokemon trainer", word: "ash" },
  { category: "characters", difficulty: "easy", clue: "office manager", word: "michael" },
  { category: "characters", difficulty: "easy", clue: "blue hedgehog", word: "sonic" },
  { category: "characters", difficulty: "medium", clue: "paper salesman", word: "dwight" },
  { category: "characters", difficulty: "medium", clue: "pokemon villain", word: "jessie" },
  { category: "characters", difficulty: "medium", clue: "sitcom neighbor", word: "kramer" },
  { category: "characters", difficulty: "medium", clue: "cartoon dad", word: "homer" },
  { category: "characters", difficulty: "medium", clue: "anime pirate", word: "luffy" },
  { category: "characters", difficulty: "hard", clue: "pokemon villain leader", word: "giovanni" },
  { category: "characters", difficulty: "hard", clue: "office temp", word: "ryan" },
  { category: "characters", difficulty: "hard", clue: "Zombie killer", word: "rick" },
  { category: "characters", difficulty: "hard", clue: "sitcom neurotic", word: "george costanza" },
  { category: "characters", difficulty: "hard", clue: "pokemon rival", word: "gary oak" },
  { category: "characters", difficulty: "hard", clue: "anime ninja", word: "kakashi" },
  { category: "characters", difficulty: "hard", clue: "cartoon villain", word: "mojojojo" },
  { category: "characters", difficulty: "hard", clue: "office accountant", word: "kevin" },
  { category: "characters", difficulty: "hard", clue: "pokemon professor", word: "oak" },
  { category: "characters", difficulty: "hard", clue: "animated horse", word: "bojack" }
];
const themeList = ["space", "western", "nature", "invaders",];
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
// Game Config
const clueRevealLives = 2;

let gameOver = false;
let lives = 7;

let currentWordObj = null;
let currentWord = "";
let maskedWord = [];
let guessedLetters = [];
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
}

populateSelectOptions();
// Game Functions
function startGame() {
  // Reset old data
  gameOver = false;
  lives = 7;
  guessedLetters = [];
  maskedWord = [];

  // Reset letter buttons
  const letterButtons = lettersEl.querySelectorAll("button");
  letterButtons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove("hidden");
  });

  // Update displays
  updateLivesDisplay();
  updateClue();
  startScreen.style.display = "none";
  // Apply theme
  const selectedTheme = themeSelect.value; // e.g., "space", "western", etc.

  // Remove any previous theme class
  gameBoard.classList.remove(...themeList);

  // Add the selected theme class
  if (selectedTheme && selectedTheme !== "random") {
    gameBoard.classList.add(selectedTheme);
  }


  // Change UI state
  startScreen.classList.add("hidden");
  gameBoard.classList.remove("hidden");

  // Read user selection
  let selectedCategory = categorySelect.value;
  let selectedDifficulty = difficultySelect.value;

  if (selectedCategory === "random") {
    selectedCategory = categories[Math.floor(Math.random() * categories.length)];
  }
  if (selectedDifficulty === "random") {
    selectedDifficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
  }

  // Filter words
  const filteredWords = wordList.filter(
    wordObj => wordObj.category === selectedCategory && wordObj.difficulty === selectedDifficulty
  );

  if (filteredWords.length === 0) return;

  const randomIndex = Math.floor(Math.random() * filteredWords.length);
  currentWordObj = filteredWords[randomIndex];
  currentWord = currentWordObj.word.toUpperCase();
  maskedWord = currentWord.split("").map(() => "_");

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

  let foundMatch = false;

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
  }

  updateMaskedWordDisplay();
  checkWinCondition();
}

function updateMaskedWordDisplay() {
  wordDisplayEl.textContent = maskedWord.join(" ");
}

function updateLivesDisplay() {
  livesTextEl.textContent = `${lives}`;
}

function checkWinCondition() {
  const wordGuessed = !maskedWord.includes("_");

  if (lives <= 0) {
    gameOver = true;
    endGameMessageEl.textContent = "Game Over!";
    wordRevealEl.textContent = `The word was: ${currentWord}`;
    gameBoard.classList.add("hidden");
    endGame.classList.remove("hidden");
  } else if (wordGuessed) {
    gameOver = true;
    endGameMessageEl.textContent = "Well done my guy!";
    wordRevealEl.textContent = `The word was: ${currentWord}`;
    gameBoard.classList.add("hidden");
    endGame.classList.remove("hidden");
  }
}
// Event Listeners
startBtn.addEventListener("click", startGame);

lettersEl.addEventListener("click", e => {
  if (e.target.tagName !== "BUTTON") return;

  const letter = e.target.id;
  e.target.classList.add("hidden");
  e.target.disabled = true;
  letterCheck(letter);
});

resetBtn.addEventListener("click", () => {
  startScreen.classList.remove("hidden");
  endGame.classList.add("hidden");
});