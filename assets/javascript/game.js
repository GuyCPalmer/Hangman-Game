//Global variables
var playerScore = {
wins: 0;
losses: 0;
}

function (){
  //hangman object
  var words = ["saved by the bell",
    "Nintendo",
    "Bevis and Butthead",
    "clueless",
    "America Online",
    "mighty morphin power rangers",
    "Waynes world",
    "vanilla ice",
    "jurassic park",
    "sony discman",
    ];
  var wordsCopy = [];

  var isPlaying = false;
  var youWin = ["Boo-ya!", "Boom Shakalaka!", "Sweeeet!"];
  var youlose = ["oh snap! you lose", "Your Mom!" "You win! NOT!"]
  var hangText = document.querySelector(".hang-text");
  var rightText = document.querySelector(".right-text");
  var wrongText = document.querySelector(".wrong-text");
  var startButton = document.querySelector(".btn-start");
  var replayButton = document.querySelector(".btn-replay");
  var resetScore = document.querySelector(".reset");
}

startButton.addEventListener("click", function(event){
  startGame = begin();
});

resetScore.addEventListener("click",function(event){
  playerScore = resetScore();
  updateScore(playerScore.wins, playerScore.losses);
});

replayButton.addEventListener("click",function(event){
  if (wins) {
    alert = "bet you cant do that again!";
  } else {
    alert = "your mom did better than that!";
  }
});


//function 

function
  var randomWord = randomWordGenerator(words)


//keyboard letters for user to chose
var letters = ["A", "B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
    "V", "W", "X", "Y", "Z",
    ];

//
document.onkeyup =  function(event) {
  var letters = event.key;
}

//variable to hold the guesses used so far
var lettersGuessed =[];

//tracks how many guesses are left
var guessesLeft = 10;

//variable for the current word
var currentWord = computerChoice[Math.floor(Math.random() * computerChoice.length)];

// replace characters with underscores to hide current word
var wordHidden = currentWord.split("").map(function(){return "_"});


