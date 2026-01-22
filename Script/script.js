/* Game logic
Initialize game state   [DONE]
  select word and clue
  set lives             {DONE}
  create masked word display
  enable letter input

On letter input
  if game is over, ignore input
  if letter already guessed, ignore input
  mark letter as guessed
  if letter exists in word
    reveal all matching positions
  else
    decrease lives
  check win condition
  check loss condition

If win
  display success message
  disable input

If loss
  display game over message
  disable input

On restart
  reset all state
  start new game


*/

const wordList = [
  // FOOD (20)
  { category: "food", difficulty: "easy", Clue: "Red fruit", word: "apple" },
  { category: "food", difficulty: "easy", Clue: "Yellow fruit", word: "banana" },
  { category: "food", difficulty: "easy", Clue: "Breakfast grain", word: "oats" },
  { category: "food", difficulty: "easy", Clue: "Dairy drink", word: "milk" },
  { category: "food", difficulty: "easy", Clue: "Orange vegetable", word: "carrot" },
  { category: "food", difficulty: "medium", Clue: "Italian noodle", word: "spaghetti" },
  { category: "food", difficulty: "medium", Clue: "Green vegetable", word: "broccoli" },
  { category: "food", difficulty: "medium", Clue: "Mexican wrap", word: "burrito" },
  { category: "food", difficulty: "medium", Clue: "Asian dumpling", word: "gyoza" },
  { category: "food", difficulty: "medium", Clue: "Fried potato", word: "frenchfries" },
  { category: "food", difficulty: "hard", Clue: "Italian pie", word: "pizza" },
  { category: "food", difficulty: "hard", Clue: "Japanese noodles", word: "udon" },
  { category: "food", difficulty: "hard", Clue: "Fermented cabbage", word: "sauerkraut" },
  { category: "food", difficulty: "hard", Clue: "Middle Eastern dip", word: "hummus" },
  { category: "food", difficulty: "hard", Clue: "Spiced rice dish", word: "biryani" },
  { category: "food", difficulty: "hard", Clue: "Raw fish dish", word: "sashimi" },
  { category: "food", difficulty: "hard", Clue: "Korean side dish", word: "kimchi" },
  { category: "food", difficulty: "hard", Clue: "French pastry", word: "croissant" },
  { category: "food", difficulty: "hard", Clue: "Swiss cheese", word: "gruyere" },
  { category: "food", difficulty: "hard", Clue: "Thai soup", word: "tomyum" },
  // PLACES (20)
  { category: "places", difficulty: "easy", Clue: "US city", word: "chicago" },
  { category: "places", difficulty: "easy", Clue: "Capital of France", word: "paris" },
  { category: "places", difficulty: "easy", Clue: "UK capital", word: "london" },
  { category: "places", difficulty: "easy", Clue: "Desert city", word: "phoenix" },
  { category: "places", difficulty: "easy", Clue: "Beach state", word: "florida" },
  { category: "places", difficulty: "medium", Clue: "Italian city", word: "florence" },
  { category: "places", difficulty: "medium", Clue: "Canadian city", word: "vancouver" },
  { category: "places", difficulty: "medium", Clue: "Australian city", word: "adelaide" },
  { category: "places", difficulty: "medium", Clue: "Spanish capital", word: "madrid" },
  { category: "places", difficulty: "medium", Clue: "Japanese city", word: "osaka" },
  { category: "places", difficulty: "hard", Clue: "Czech capital", word: "prague" },
  { category: "places", difficulty: "hard", Clue: "Iceland capital", word: "reykjavik" },
  { category: "places", difficulty: "hard", Clue: "Moroccan city", word: "marrakech" },
  { category: "places", difficulty: "hard", Clue: "Ancient city", word: "persepolis" },
  { category: "places", difficulty: "hard", Clue: "Indian city", word: "kochi" },
  { category: "places", difficulty: "hard", Clue: "Turkish city", word: "izmir" },
  { category: "places", difficulty: "hard", Clue: "Greek island", word: "zakynthos" },
  { category: "places", difficulty: "hard", Clue: "Chilean desert", word: "atacama" },
  { category: "places", difficulty: "hard", Clue: "Peruvian site", word: "machupicchu" },
  { category: "places", difficulty: "hard", Clue: "Mongolian capital", word: "ulaanbaatar" },
  // PEOPLE (20)
  { category: "people", difficulty: "easy", Clue: "First US president", word: "washington" },
  { category: "people", difficulty: "easy", Clue: "Famous singer", word: "madonna" },
  { category: "people", difficulty: "easy", Clue: "Tech billionaire", word: "musk" },
  { category: "people", difficulty: "easy", Clue: "Civil rights leader", word: "king" },
  { category: "people", difficulty: "easy", Clue: "Cartoon sailor", word: "popeye" },
  { category: "people", difficulty: "medium", Clue: "Renaissance artist", word: "michelangelo" },
  { category: "people", difficulty: "medium", Clue: "Scientist of gravity", word: "newton" },
  { category: "people", difficulty: "medium", Clue: "Roman ruler", word: "caesar" },
  { category: "people", difficulty: "medium", Clue: "Fictional detective", word: "sherlock" },
  { category: "people", difficulty: "medium", Clue: "Greek philosopher", word: "plato" },
  { category: "people", difficulty: "hard", Clue: "Composer", word: "tchaikovsky" },
  { category: "people", difficulty: "hard", Clue: "Surrealist artist", word: "dali" },
  { category: "people", difficulty: "hard", Clue: "Mathematician", word: "fibonacci" },
  { category: "people", difficulty: "hard", Clue: "Ancient general", word: "hannibal" },
  { category: "people", difficulty: "hard", Clue: "Poet", word: "tselliot" },
  { category: "people", difficulty: "hard", Clue: "Mythical hero", word: "achilles" },
  { category: "people", difficulty: "hard", Clue: "Norse god", word: "odin" },
  { category: "people", difficulty: "hard", Clue: "Egyptian queen", word: "cleopatra" },
  { category: "people", difficulty: "hard", Clue: "Russian author", word: "dostoevsky" },
  { category: "people", difficulty: "hard", Clue: "German philosopher", word: "nietzsche" },
  // SPORTS (20)
  { category: "sports", difficulty: "easy", Clue: "Bat and ball", word: "baseball" },
  { category: "sports", difficulty: "easy", Clue: "Kicking game", word: "soccer" },
  { category: "sports", difficulty: "easy", Clue: "Olympic race", word: "sprint" },
  { category: "sports", difficulty: "easy", Clue: "Court game", word: "tennis" },
  { category: "sports", difficulty: "easy", Clue: "Ice sport", word: "hockey" },
  { category: "sports", difficulty: "medium", Clue: "Martial art", word: "taekwondo" },
  { category: "sports", difficulty: "medium", Clue: "Winter sliding", word: "bobsled" },
  { category: "sports", difficulty: "medium", Clue: "Cue sport", word: "billiards" },
  { category: "sports", difficulty: "medium", Clue: "Combat sport", word: "wrestling" },
  { category: "sports", difficulty: "medium", Clue: "Water race", word: "rowing" },
  { category: "sports", difficulty: "hard", Clue: "Extreme climbing", word: "mountaineering" },
  { category: "sports", difficulty: "hard", Clue: "Japanese wrestling", word: "sumo" },
  { category: "sports", difficulty: "hard", Clue: "Board sailing", word: "windsurfing" },
  { category: "sports", difficulty: "hard", Clue: "Equestrian sport", word: "dressage" },
  { category: "sports", difficulty: "hard", Clue: "Track cycling", word: "keirin" },
  { category: "sports", difficulty: "hard", Clue: "Ice stone sport", word: "curling" },
  { category: "sports", difficulty: "hard", Clue: "Motor racing", word: "motogp" },
  { category: "sports", difficulty: "hard", Clue: "French ball game", word: "petanque" },
  { category: "sports", difficulty: "hard", Clue: "Highland sport", word: "cabertoss" },
  { category: "sports", difficulty: "hard", Clue: "Winter endurance", word: "biathlon" },
  // ANIMALS (20)
  { category: "animals", difficulty: "easy", Clue: "Farm animal", word: "cow" },
  { category: "animals", difficulty: "easy", Clue: "Loyal pet", word: "dog" },
  { category: "animals", difficulty: "easy", Clue: "Striped cat", word: "tiger" },
  { category: "animals", difficulty: "easy", Clue: "Jungle king", word: "lion" },
  { category: "animals", difficulty: "easy", Clue: "Long neck", word: "giraffe" },
  { category: "animals", difficulty: "medium", Clue: "Australian hopper", word: "kangaroo" },
  { category: "animals", difficulty: "medium", Clue: "Arctic bear", word: "polar" },
  { category: "animals", difficulty: "medium", Clue: "Slow climber", word: "sloth" },
  { category: "animals", difficulty: "medium", Clue: "Smart marine mammal", word: "dolphin" },
  { category: "animals", difficulty: "medium", Clue: "Night bird", word: "owl" },
  { category: "animals", difficulty: "hard", Clue: "Egg laying mammal", word: "platypus" },
  { category: "animals", difficulty: "hard", Clue: "African antelope", word: "wildebeest" },
  { category: "animals", difficulty: "hard", Clue: "Spotted wild cat", word: "ocelot" },
  { category: "animals", difficulty: "hard", Clue: "Armored mammal", word: "pangolin" },
  { category: "animals", difficulty: "hard", Clue: "Nocturnal primate", word: "ayeaye" },
  { category: "animals", difficulty: "hard", Clue: "Large flightless bird", word: "cassowary" },
  { category: "animals", difficulty: "hard", Clue: "Desert fox", word: "fennec" },
  { category: "animals", difficulty: "hard", Clue: "Poison frog family", word: "dendrobatid" },
  { category: "animals", difficulty: "hard", Clue: "Deep sea shark", word: "goblinshark" },
  { category: "animals", difficulty: "hard", Clue: "Ancient fish", word: "coelacanth" }
];
const themeList = ["space", "western", "nature", "ocean", "zoo"]

//global setup
const categorySelect = document.getElementById("category-select")
const difficultySelect = document.getElementById("difficulty-select")
const themeSelect = document.getElementById("theme-select")

const lettersEl = document.getElementById("letters")
const startBtn = document.getElementById("start-btn")
const resetBtn = document.getElementById("reset-btn")
const gameBoard = document.getElementById("game-board")
const startScreen = document.getElementById("start-screen")
const endGame = document.getElementById("end-game")

let gameOver = false
let lives = 7

let currentWordObj = null
let currentWord = ""
let maskedWord = []
let guessedLetters = []

// Derived Data
const categories = [...new Set(wordList.map(word => word.category))]
const difficulties = [...new Set(wordList.map(word => word.difficulty))]
const themes = [...new Set(themeList)]



categories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
})
difficulties.forEach(difficulty => {
  const option = document.createElement("option");
  option.value = difficulty;
  option.textContent = difficulty;
  difficultySelect.appendChild(option);
})
themes.forEach(theme => {
  const option = document.createElement("option")
  option.value = theme.toLowerCase();
  option.textContent = theme
  themeSelect.appendChild(option)
})
//functions
function startGame() {
  console.log("start game function")
  //reset old data
  gameOver = false
  lives = 7
  guessedLetters = []
  maskedWord = []
  //change UI state
  startScreen.classList.add("hidden")
  gameBoard.classList.remove("hidden")
  // read user selection
  let selectedCategory = categorySelect.value
  let selectedDifficulty = difficultySelect.value

  if (selectedCategory === "random") {
    const randomIndex = Math.floor(Math.random() * categories.length);
    selectedCategory = categories[randomIndex]
  }
  if (selectedDifficulty === "random") {
    const randomIndex = Math.floor(Math.random() * difficulties.length);
    selectedDifficulty = difficulties[randomIndex]
  }
  // filtered words
  const filteredWords = wordList.filter(wordObj =>
    wordObj.category === selectedCategory && wordObj.difficulty === selectedDifficulty
  )
    if (filteredWords.length === 0) {
    console.error("No words found")
    return
  }
  const randomIndex = Math.floor(Math.random() * filteredWords.length)
  currentWordObj = filteredWords[randomIndex]
  currentWord = currentWordObj.word.toUpperCase()
  maskedWord = currentWord.split("").map(() => "_")
  document.getElementById("masked-word").textContent = maskedWord.join(" ")
  console.log(selectedCategory, selectedDifficulty, filteredWords, currentWordObj, currentWord, maskedWord)
}
function gameOver() {
  console.log("game over")
}
//event listeners
document.getElementById("start-btn").addEventListener("click", (e) => {
  startGame()
})

document.getElementById("letters").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("letter clicked", e.target.id);
    e.target.classList.add("hidden");
    e.target.disabled = true
  }
})