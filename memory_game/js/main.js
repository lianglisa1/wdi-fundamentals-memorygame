console.log("Up and running!");

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay.length === 2) {
		if (cardInPlay[0] === cardInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again.");
		}
	} 
}

function flipCard(cardId) {
	checkForMatch();
	console.log ("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
} 

flipCard(0);
flipCard(2);

//suppose to display "Sorry, try again." in console but is not showing. Review Project Functions again