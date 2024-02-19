var wins1 = 0
var wins2 = 0
function reset()
{
   wins1 = 0;
   document.querySelector(".counter p").textContent = 'Player 1 wins: ' + wins1;
   wins2 = 0;
   document.querySelectorAll('p')[1].textContent = 'Player 2 wins: ' + wins2;
   return wins1, wins2;

}
function roll()
{
    var diceOne = Math.floor((Math.random() * 6) + 1);
    var diceTwo = Math.floor((Math.random() * 6) + 1);


switch (diceOne)
    {
        case 1:
            document.querySelector(".player1 img").setAttribute('src', './images/dice1.png');
            break;
        case 2:
            document.querySelector(".player1 img").setAttribute('src', './images/dice2.png');
            break;
        case 3:
            document.querySelector(".player1 img").setAttribute('src', './images/dice3.png');
            break;
        case 4:
            document.querySelector(".player1 img").setAttribute('src', './images/dice4.png');
            break;
        case 5:
            document.querySelector(".player1 img").setAttribute('src', './images/dice5.png');
            break;
        case 6:
            document.querySelector(".player1 img").setAttribute('src', './images/dice6.png');
    }

    switch (diceTwo)
    {
        case 1:
            document.querySelector(".player2 img").setAttribute('src', './images/dice1.png');
            break;
        case 2:
            document.querySelector(".player2 img").setAttribute('src', './images/dice2.png');
            break;
        case 3:
            document.querySelector(".player2 img").setAttribute('src', './images/dice3.png');
            break;
        case 4:
            document.querySelector(".player2 img").setAttribute('src', './images/dice4.png');
            break;
        case 5:
            document.querySelector(".player2 img").setAttribute('src', './images/dice5.png');
            break;
        case 6:
            document.querySelector(".player2 img").setAttribute('src', './images/dice6.png');
    }

    if (diceOne > diceTwo)
    {
        document.querySelector('h1').textContent = 'Player One Wins!!';
        wins1 ++;
        document.querySelector(".counter p").textContent = 'Player 1 wins: ' + wins1;

    }
    else if (diceTwo > diceOne)
    {
        document.querySelector('h1').textContent = 'Player Two Wins!!';
        wins2 ++;
        document.querySelectorAll('p')[1].textContent = 'Player 2 wins: ' + wins2;
    }
    else
    {
        document.querySelector('h1').textContent = 'Tie!!';
    }
}

