document.addEventListener('DOMContentLoaded',()=>{
    const cardsArray = [
        {
            name:"lebron james",
            img:"images/cardGame1.png"
        },
        {
            name:"lebron james",
            img:"images/cardGame1.png"
        },  
        {
            name:"kevin durant",
            img:"images/cardGame2.png"
        },
        {
            name:"kevin durant",
            img:"images/cardGame2.png"
        },
        {
            name:"stefh curry",
            img:"images/cardGame3.png"
        },
        {
            name:"stefh curry",
            img:"images/cardGame3.png"
        },
        {
            name:"james harden",
            img:"images/cardGame4.png"
        },
        {
            name:"james harden",
            img:"images/cardGame4.png"
        },
        {
            name:"russel westbrooke",
            img:"images/cardGame5.png"
        },
        {
            name:"russel westbrooke",
            img:"images/cardGame5.png"
        },
        {
            name:"kyrie irving",
            img:"images/cardGame6.png"
        },
        {
            name:"kyrie irving",
            img:"images/cardGame6.png"
        }
    ]




    cardsArray.sort(()=> 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    function createBoard(){
        for(let i = 0 ; i < cardsArray.length ; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/gameCard.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if(cardsChosen[0] === cardsChosen[1]){
            alert('you found match!')
            console.log(cards[0]);
            cards[optionOneId].setAttribute('src','images/winCard.png')
            cards[optionTwoId].setAttribute('src','images/winCard.png')
            cardsWon.push(cardsChosen);
            console.log(cardsWon);
            
        }
        else{
            cards[optionOneId].setAttribute('src','images/gameCard.png')
            cards[optionTwoId].setAttribute('src','images/gameCard.png')
            alert('sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length == cardsArray.length/2){
            timeLeft.textContent = ""
            resultDisplay.textContent = 'Congratlations! You found them all!';
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src',cardsArray[cardId].img)
        if(cardsChosen.length === 2){
            setTimeout(checkForMatch,500)
        }

    }
    createBoard()

})