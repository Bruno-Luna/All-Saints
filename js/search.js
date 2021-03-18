let inputSearch = document.getElementById("input-search");
let allDivsCards = document.getElementById("container-main");
let vectorValues  = [];
let allCards = allDivsCards.querySelectorAll(".card");


function setVisibleAllCards(){
    if (this.value.length < 2){
        for (let j = 0; j < allCards.length; j++){
            allCards[j].classList.remove("item-no-search");
            allCards[j].classList.add("item-search");
        }
    }
}

function searchItems(){
    let textSearch = "";
    let itemsFound = [];
   
    if (this.value.length >= 2){
        textSearch = this.value.normalize('NFKD').replace(/[^\w\s.-_\/]/g, '').toLowerCase();

        for (let i = 0; i < vectorValues.length; i++){
            let answer = vectorValues[i].includes(textSearch);

            if(answer === true){
                itemsFound.push(i);
            }
        }

        for (let i = 0; i < allCards.length; i++){
            if (!itemsFound.includes(i)){
                console.log("test");
                allCards[i].classList.remove("item-search");
                allCards[i].classList.add("item-no-search");
            }
        }

    }
    else{
        setVisibleAllCards;
    }
}

function addValuesVector(){
    for (let i = 0; i < allCards.length; i++){
        vectorValues.push(allCards[i].getAttribute("data-value").normalize('NFKD').replace(/[^\w\s.-_\/]/g, '').toLowerCase());
        console.log(vectorValues[i]);
    }
}

addValuesVector();
inputSearch.addEventListener("keypress", searchItems, false);
inputSearch.addEventListener("keydown", setVisibleAllCards, false);
inputSearch.addEventListener("blur", setVisibleAllCards, false);