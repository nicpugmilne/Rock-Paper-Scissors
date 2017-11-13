var outcome = false
var gameOptions = [
  "rock",
  "paper",
  "scissors"
]
var x = ""
var y = gameOptions[Math.floor(Math.random()*gameOptions.length)]

function playGame(x, y){
  if (x === "rock"){
    if (y === "scissors"){
      console.log("You won!")
    }else if (y === "paper"){
      console.log("You Lost :(")
    }else{
      console.log("No winner, please try again!")
    }
  }else if (x === "paper"){
    if (y === "rock"){
      console.log("You won!")
  }else if (y === "scissors"){
      console.log("You Lost :(")
    }else{
      console.log("No winner, please try again!")
    }
  }//Player x is Scissors
  else {
    if (y === "paper"){
      console.log("You won!")
    }else if (y === "rock"){
      console.log("You Lost :(")
    }else{
      console.log("No winner, please try again!")
    }
  }
  console.log(x)
  console.log(y)
}
