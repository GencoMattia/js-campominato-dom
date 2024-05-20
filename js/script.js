const gridEl = document.querySelector("#grid");
const getDifficulty = 100;

document.querySelector("#play-button").addEventListener("click", function(){
    getNewGame(gridEl, getDifficulty);
});


// -------------------FUNZIONI----------------------

function getNewGame(container, difficulty) {
    container.innerHTML = ""

    let bombsList = [];
    bombsList = getBlacklistedNumbers(difficulty)
    console.log(bombsList);

    for(i = 0; i < difficulty; i++) {
        // Elements
        const cellEl = document.createElement("article");
        const cellNumberEl = document.createElement("span");
    
        // Adding Elements
        gridEl.appendChild(cellEl);
        cellEl.appendChild(cellNumberEl);
        cellNumberEl.append(i + 1);

        if (bombsList.includes(i + 1)) {
            cellEl.classList.add("bomb");
        }
        
        // Event Click
        cellEl.addEventListener("click", function() {
            cellEl.classList.add("active");
            console.log(cellNumberEl.outerText);
        });
    };
};

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1)) + min;
};

function getUniqueRandomNumber(blacklist, min, max) {
    let randomNumber;
    let isFound = false;
    while(!isFound) {
        randomNumber = getRandomNumber(min, max);
        if(!blacklist.includes(randomNumber)){
            isFound = true; 
        };
    };
    return randomNumber;
};

function getBlacklistedNumbers(maxNumbers) {
    const blacklistedNumbers = [];
    while(blacklistedNumbers.length < 16){
        blacklistedNumbers.push (getUniqueRandomNumber(blacklistedNumbers, 1, maxNumbers))
    }
    return blacklistedNumbers
};

// console.log(getBlacklistedNumbers(100))