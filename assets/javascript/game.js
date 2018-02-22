//Global variables
var playerScore = {
wins: 0,
losses: 0,
}

$(document).ready(function () {
  let game = new Game()
})

function Game(){
  this.imgDisplay = $("img")
  this.lettersGuessedDisplay = $(".letters-guessed")
  this.lastGuessDisplay = $(".last-guess")
  this.revealedWordDisplay = $(".revealed-word")
  this.clueDisplay = $(".clue")
  this.winsDisplay = $(".wins")
  this.lossesDisplay = $(".losses")
  this.questionBank = [
  {
    "img": "https://image.ibb.co/eVJz3H/nintendo.png",
    "clue": "Super Mario Bros",
    "answer": "Nintendo"
  },
  {
    "img": "https://image.ibb.co/daLqAx/rollerblades.png"
    "clue": "how you got around when you didnt want to walk",
    "answer": "rollerblades"
  }
  {
    "img": "https://image.ibb.co/mGAqAx/tamagotchi.png"
    "clue": "digital pets",
    "answer": "tamagotchis",
  }
  {
    "img": "https://image.ibb.co/dgoXOH/walkman.png"
    "clue": "how you listened to your favorite jams",
    "answer": "walkman"
  }
  {
    "img": "https://image.ibb.co/f9xRiH/blockbuster.png",
    "clue": "the only way to watch movies",
    "answer": "Blockbuster"
  }
  {
    "img":"https://image.ibb.co/dOFqAx/clueless.png",
    "clue": "as if",
    "answer": "clueless"
  }
  ];
  this.lettersGuessed = []
  this.correctLettersGuessed = []
  this.winScore = 0
  this.lossesScore = 0

  this.setup();
};

Game.prototype.setup = function () {
  this.replay ()

  $(document).on('keyup', event => {
    this.processGuess(event.key);
  })

  $('.replay-btn').on('click', event => {
    this.replay ();
  })

  console.log(this.answer)
};

Game.prototype.replay = function () {
  this.winScore = 0;
  this.winsDisplay.text('')
  this.lossesDisplay.text('')
  this.replay();
};

Game.prototype.reset = function () {
    let questionNum = Math.floor(Math.random() * this.questionBank.length)
    let question = this.questionBank[questionNum]
    this.answer = question["answer"];
  
    this.correctLettersGuessed = [];
    this.lettersGuessed = [];
  
    this.imgDisplay.attr("src", question["img"])
    this.lettersGuessedDisplay.empty();
    this.lastGuessDisplay.text("Make Guess");
    this.clueDisplay.text(question["clue"]);
    this.revealedWordDisplay.text(this.getRevealedWord());
  };

  Game.prototype.processGuess = function (guess) {
    if (this.getRevealedWord() === this.answer) {
      return;
    }
  
    if (this.isGuessValid(guess)) {
      this.correctLettersGuessed.push(guess);
    }
  
    if (this.lettersGuessed.indexOf(guess) === -1) {
      this.lettersGuessed.push(guess);
    }
  
    this.lastGuessDisplay.text(guess);
    this.lettersGuessedDisplay.text(this.lettersGuessed);
    this.revealedWordDisplay.text(this.getRevealedWord())
  
    if (this.getRevealedWord() === this.answer) {
      this.winScore++;
      this.winsDisplay.text(this.winScore);
    }
  }
  
  Game.prototype.isGuessValid = function(guess) {
    if (this.answer.indexOf(guess) > -1) {
      return true
    }
    else {
      return false
    }
  };
  
  Game.prototype.getRevealedWord = function () {
    let revealedWord = "";
  
    for (let i = 0; i < this.answer.length; i++) {
      if (this.correctLettersGuessed.indexOf(this.answer[i]) > -1) {
        revealedWord += this.answer[i];
      }
      else {
        revealedWord += "_"
      }
    }
  
    return revealedWord;
  };
 //hangman words
  var words = ["tamagotchis",
    "Nintendo",
    "clueless",
    "blockbuster",
    "walkman",
    "rollerblades",
    ];

 


