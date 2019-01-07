const prevBtn = document.getElementById('previous');
    const flipCard = document.getElementById('flip');

    //default: display card1.cardFront
    cardText.innerHTML = userDeck.deckCards[0].cardFront;
    let cardNumber = 0;
    //default: display card[0].cardFront
    const card = userDeck.deckCards;
    let number = 0;
    cardText.innerHTML = card[0].cardFront;

    next.addEventListener('click', () => {
        cardNumber++;
        cardText.innerHTML = userDeck.deckCards[cardNumber].cardFront;
        console.log('next clicked!');
        if (number < card.length-1) {
            number++;
            cardText.innerHTML = card[number].cardFront;
        } else {
            number = 0;
            cardText.innerHTML = card[number].cardFront;
        }
    });

    previous.addEventListener('click', () => {
        cardNumber--;
        cardText.innerHTML = userDeck.deckCards[cardNumber].cardFront;
        console.log('previous clicked!');
        if (number > 0) {
            number--;
            cardText.innerHTML = card[number].cardFront;
        } else {
            number = card.length-1;
            cardText.innerHTML = card[number].cardFront;
        }
    });

    flipCard.addEventListener('click', () => {
        if (cardText.innerHTML === userDeck.deckCards[cardNumber].cardFront) {
            cardText.innerHTML = userDeck.deckCards[cardNumber].cardBack;
        } else if (cardText.innerHTML === userDeck.deckCards[cardNumber].cardBack) {
            cardText.innerHTML = userDeck.deckCards[cardNumber].cardFront;
        if (cardText.innerHTML === card[number].cardFront) {
            cardText.innerHTML = card[number].cardBack;
        } else if (cardText.innerHTML === card[number].cardBack) {
            cardText.innerHTML = card[number].cardFront;
        } else {
            cardText.innerHTML = "Oh No! Something went wrong with the deck.;";
        }
        console.log('flip card clicked!');
    });

    // //if user has decks, display list of names/links to their decks