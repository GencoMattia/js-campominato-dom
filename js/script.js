const getDifficulty = 100;

function getNewGame(difficulty) {
    document.querySelector("#play-button").addEventListener("click", function(){
    const gridEl = document.querySelector("#grid");
        gridEl.innerHTML = ""
        for(i = 0; i < difficulty; i++) {
            // Elements
            const cellEl = document.createElement("article");
            const cellNumberEl = document.createElement("span");
        
            // Adding Elements
            gridEl.appendChild(cellEl);
            cellEl.appendChild(cellNumberEl);
            cellNumberEl.append(i + 1);
            
            // Event Click
            cellEl.addEventListener("click", function() {
                cellEl.classList.add("active");
                console.log(cellNumberEl.outerText);
            });
        }
    });
}

document.querySelector("#play-button").addEventListener("click", function(){
    getNewGame(getDifficulty)
})