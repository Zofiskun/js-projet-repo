let randomnumber=parseInt(Math.random()*50+1)
const userInput=document.querySelector('#guessField')
const submitButton=document.querySelector('#sub')
const guessSlot=document.querySelector('.Guesses')
const lastResult=document.querySelector('.LastResult')
const lowORhigh=document.querySelector('.LowOrHi')
const startOver=document.querySelector('.resultParas')
  let prevGuesses=[]
  let numguess=1
  let p=document.createElement('p')
  let playgame=true;


   if(playgame){
    submitButton.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validateGuess(guess)
    })

   }

function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    }
    else if(guess<1){
        alert('please enter a number greater than 1')
    }
    else if(guess>100){
        alert('please enter a number less than 100')
    }
    else{
        prevGuesses.push(guess)
        if(numguess===5){
            displayguess(guess)
            displaymessage(`Game Over!! the random number was ${randomnumber}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }

}
function checkguess(guess){
    if(guess===randomnumber){
        displaymessage('you guessed it right')
        endgame()

    }
    else if(guess<randomnumber){
        displaymessage('Number is too low')
    }
    else if(guess>randomnumber){
        displaymessage('Number is too high')
    }
}
function displayguess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess} `;
    numguess++;
    lastResult.innerHTML=`${6-numguess}`
}
function displaymessage(message){
    lowORhigh.innerHTML=`<h2>${message}</h2>`
    
}
function endgame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newgame"> start new game</h2>`
    playgame=false;
    startOver.appendChild(p)
    newgame()
    
}
function newgame(){
    const newgamebutton=document.querySelector('#newgame')
    newgamebutton.addEventListener('click',function(e){
        randomnumber=parseInt(Math.random()*50+1)
        prevGuesses=[]
        numguess=1
        guessSlot.innerHTML=''
       lastResult.innerHTML=`${6-numguess}`
       userInput.removeAttribute('disabled')
       startOver.removeChild(p)
        playgame=true;
    })
    
}