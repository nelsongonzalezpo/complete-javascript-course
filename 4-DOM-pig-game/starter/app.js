/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, reglamentario, field, lastDice;


init()

document.querySelector('.btn-roll').addEventListener('click', rollDice)
document.querySelector('.btn-hold').addEventListener('click', hold)
document.querySelector('.btn-new').addEventListener('click', init)

function rollDice() {

    if (gamePlaying) {

        //Random number
        var dice = Math.ceil(Math.random() * 6)
        var dice2 = Math.ceil(Math.random() * 6)


        //Display dice result
        var diceDOM = document.querySelector('.dice')
        var diceDOM2 = document.querySelector('.dice-2')

        diceDOM.style.display = 'block'
        diceDOM.src = 'dice-' + dice + '.png'

        diceDOM2.style.display = 'block'
        diceDOM2.src = 'dice-' + dice2 + '.png'


        //Update result if number !== 1

         if (dice !== 1 && dice2 !== 1) {

            var dices = dice + dice2

            roundScore += dices
            document.querySelector('#current-' + activePlayer).textContent = roundScore


        } else {

            //next player
            roundScore = 0
            changePlayer()

        }



        lastDice = dice

    }





}

function changePlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
    roundScore = 0

    document.getElementById('current-0').textContent = 0
    document.getElementById('current-1').textContent = 0


    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.dice-2').style.display = 'none'



}



function hold() {


    if (gamePlaying) {

        //add current to global score 
        scores[activePlayer] += roundScore

        //update UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        //check if player won the game


        if (field) {

            if (scores[activePlayer] >= field) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
                document.querySelector('.dice').style.display = 'none'
                document.querySelector('.dice-2').style.display = 'none'


                gamePlaying = false

            } else {
                changePlayer()
            }

        } else if (reglamentario) {

            if (scores[activePlayer] >= reglamentario) {
                document.querySelector('#name-' + activePlayer).textContent = 'Winner!'
                document.querySelector('.dice').style.display = 'none'
                document.querySelector('.dice-2').style.display = 'none'


                gamePlaying = false

            } else {
                changePlayer()
            }


        }




    }



}


function init() {

    gamePlaying = true
    reglamentario = 50;

    field = document.getElementById('inputField').value

    console.log(field)

    scores = [0, 0]
    roundScore = 0
    activePlayer = 0;

    //Hide dice
    document.querySelector('.dice').style.display = 'none'
    document.querySelector('.dice-2').style.display = 'none'


    //Set values to 0
    document.getElementById('score-0').textContent = 0
    document.getElementById('score-1').textContent = 0
    document.getElementById('current-0').textContent = 0
    document.getElementById('current-1').textContent = 0

    document.querySelector('#name-0').textContent = 'Player 1'
    document.querySelector('#name-1').textContent = 'Player 2'

    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')

    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')

    document.querySelector('.player-0-panel').classList.add('active')

}