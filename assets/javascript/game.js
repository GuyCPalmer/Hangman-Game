//Global variables
var playerScore = {
wins: 0,
losses: 0,
}

 //hangman words
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

  //array with letters picked
  var lettersGuessed = []; 
  //array with number of guesses left
  var guessesLeft = 10;
  //array that holds the dashes according to the words length
  var newArray = [];
  //the computer should chose word randomly
  var computerGuess = words[Math.floor(Math.random() * words.length)];
  //array of letters of word chosen
  var chosenWord = computerGuess.split("");

  //keyboard letters for user to chose
  var letters = ["A", "B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
    "V", "W", "X", "Y", "Z",
    ];

  //this generates a random word and returns it.
function getRandomWord() {
  var randomword = words[Math.floor(Math.random() * words.length)];
  return randomword;
}

// replace characters with underscores to hide current word
var wordHidden = currentWord.split("").map(function(){return "_"});

  for (var i = 0; i < computerGuess.length; i++) {
    newArray.push(" _ ");
  document.getElementById("currentWord").innerHTML = newArray;
  document.getElementById('guessesRemaining').innerHTML = "number of guesses remaining" + guessesLeft;
  document.getElementById('lettersGuessed').innerHTML = "letters already guessed" + lettersGuessed;
  }


  var isPlaying = false;
  var hasWon = false;
  var hasLost = false;
  var youWin = ["Boo-ya!", "Boom Shakalaka!", "Sweeeet!"];
  var youLose = ["oh snap! you lose", "Your Mom!", "You win! NOT!"]


resetScore.addEventListener("click",function(event){
  playerScore = resetScore();
  updateScore(playerScore.wins, playerScore.losses);
});

replayButton.addEventListener("click",function(event){
  if (haswon) {
    alert("bet you cant do that again!");
  } else {
    alert("your mom did better than that!");
  }
});

document.onkeyup = function(event) {
  var letter = event.key;

  if(isPlaying){
  } else {
    alert("Click start to play the game!")
    return;
  }
}








