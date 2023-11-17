//creation de carte
function creationCarte (urlCarte){

const memoryBoard = document.querySelector('#memoryBoard');
const divCard = document.createElement('div');

divCard.classList.add('card');
divCard.dataset.value = urlCarte;

//creation image dans le divCard
const image = document.createElement('img');

image.setAttribute('class', 'card-content');
image.setAttribute('src', `${urlCarte}`);


//generation de carte
memoryBoard.appendChild(divCard);
divCard.appendChild(image);

divCard.addEventListener('click', onCardClick);

};




//testing de carte
//const gameBoard = document.getElementById('memoryBoard');
//gameBoard.appendChild(creationCarte('https://picsum.photos/id/243/100/100'));

//liste des images pour les cartes
const cards = [
    'https://picsum.photos/id/237/100/100', 
    'https://picsum.photos/id/238/100/100',
    'https://picsum.photos/id/239/100/100',
    'https://picsum.photos/id/240/100/100',
    'https://picsum.photos/id/241/100/100',
    'https://picsum.photos/id/242/100/100',
    'https://picsum.photos/id/243/100/100',
    'https://picsum.photos/id/244/100/100'
  ];

  //fonctionpour dupliquer le tableau image

  function duplicateTable(simpleTable){
    let doubleTable = [];

    doubleTable.push(...simpleTable);
    doubleTable.push(...simpleTable);

    return doubleTable;
  }


//ajout des 16 cartes sur le tableau
const jeuDeCartes = duplicateTable(cards);

jeuDeCartes.sort(() => 0.5 - Math.random());//melange des cartes

jeuDeCartes.forEach((element) => creationCarte(element));

//decouverte d'une carte

let selectedCard = [];
function onCardClick(e){
    const card = e.target.parentElement;
    card.classList.add('flip');
    
    selectedCard.push(card);
    if(selectedCard.length == 2){
        setTimeout(() =>{
    
        if(selectedCard[0].dataset.value == selectedCard[1].dataset.value){
            selectedCard[0].classList.add('matched');
            selectedCard[1].classList.add('matched');
            selectedCard[0].removeEventListener('click', onCardClick);
            selectedCard[1].removeEventListener('click', onCardClick);
                //fin de jeu
        const allCardNotFinded = document.querySelectorAll('.card:not(.matched)');
        if(allCardNotFinded.length == 0){
	        //Le joueur a gagné
	        alert('Bravo, vous avez gagné');
        }


        }
        else{
            selectedCard[0].classList.remove('flip');
            selectedCard[1].classList.remove('flip');
        };
        selectedCard = [];
        },500);
    }

}

