document.addEventListener('DOMContentLoaded',()=>{
    const cardsArray = [
        {
            name:"lebron james",
            img:"images/lebron.png"
        },
        {
            name:"lebron james",
            img:"images/lebron.png"
        },  
        {
            name:"kevin durant",
            img:"images/durant.png"
        },
        {
            name:"kevin durant",
            img:"images/durant.png"
        },
        {
            name:"stefh curry",
            img:"images/curry.png"
        },
        {
            name:"stefh curry",
            img:"images/curry.png"
        },
        {
            name:"james harden",
            img:"images/harden.png"
        },
        {
            name:"james harden",
            img:"images/harden.png"
        },
        {
            name:"russel westbrooke",
            img:"images/russel.png"
        },
        {
            name:"russel westbrooke",
            img:"images/russel.png"
        },
        {
            name:"kyrie irving",
            img:"images/irving.png"
        },
        {
            name:"kyrie irving",
            img:"images/irving.png"
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
            card.setAttribute('src','images/basketball.png')
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
            cards[optionOneId].setAttribute('src','images/shaq.png')
            cards[optionTwoId].setAttribute('src','images/shaq.png')
            cardsWon.push(cardsChosen);
            console.log(cardsWon);
            
        }
        else{
            cards[optionOneId].setAttribute('src','images/basketball.png')
            cards[optionTwoId].setAttribute('src','images/basketball.png')
            alert('sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if(cardsWon.length == cardsArray.length/2){
            resultDisplay.textContent = 'Congratlations! You found them all!'
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