const gridEl = document.querySelector("#grid");
const difficultySelector = document.querySelector("#difficulty-selector");

document.querySelector("#play-button").addEventListener("click", function(){
    let articlesNumber;
    let difficultyClass;

    switch(difficultySelector.value) {
        case "easy":
            articlesNumber = 100;
            difficultyClass = "easy";
            break;
        case "medium":
            articlesNumber = 81;
            difficultyClass = "medium";
            break
        case "hard":
            articlesNumber = 49;
            difficultyClass = "hard";
            break
        default:
            articlesNumber = 100; 
    }


    getNewGame(gridEl, articlesNumber, difficultyClass);
});


// -------------------FUNZIONI----------------------

function getNewGame(container, cells, difficulty) {
    container.innerHTML = "";

    let bombsList = [];
    bombsList = getBlacklistedNumbers(cells);
    console.log(bombsList);
    
    let gamePoints = 0;
    let gameOver = false;

    const pointCalculatorEl = document.querySelector("#points-number");
    pointCalculatorEl.textContent = gamePoints;
    
    for(i = 0; i < cells; i++) {
        // Elements
        const cellEl = document.createElement("article");
        const cellNumberEl = document.createElement("span");
        
        // Adding Elements
        gridEl.appendChild(cellEl);
        cellEl.appendChild(cellNumberEl);
        cellNumberEl.append(i + 1);

        cellEl.classList.add(difficulty);
        
        // Adding Bombs
        if (bombsList.includes(i + 1)) {
            cellEl.classList.add("bomb");
        }
        
        // Event Click
        cellEl.addEventListener("click", function onClick() {
            if(gameOver === true){
                return
            }
            cellEl.classList.add("active");
            cellEl.removeEventListener("click", onClick);
            console.log(cellNumberEl.outerText);
            
            // Game Over conditions
            if(cellEl.classList.contains("bomb")){
                const bombEl = container.querySelectorAll(".bomb");
                bombEl.forEach(function(cellEl) {
                    cellEl.classList.add("active");
                });
                gameOver = true
                console.log("Bomba! Game Over");
            } else {
                gamePoints = gamePoints + 1;
                console.log(gamePoints);
                pointCalculatorEl.textContent = gamePoints
            };
        });
    };    
};

/**
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns a random number
 */
function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min + 1)) + min;
};

/**
 * 
 * @param {*} blacklist 
 * @param {*} min 
 * @param {*} max 
 * @returns a random unique number
 */
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

/**
 * 
 * @param {*} maxNumbers 
 * @returns a list of 16 blacklisted unique random nubers that range from 1 to a set max number
 */
function getBlacklistedNumbers(maxNumbers) {
    const blacklistedNumbers = [];
    while(blacklistedNumbers.length < 16){
        blacklistedNumbers.push (getUniqueRandomNumber(blacklistedNumbers, 1, maxNumbers))
    }
    return blacklistedNumbers
};

// console.log(getBlacklistedNumbers(100))