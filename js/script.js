for(i = 0; i < 100; i++) {
    // Elements
    const gridEl = document.querySelector("#grid");
    const cellEl = document.createElement("article");
    const cellNumberEl = document.createElement("span");

    // Adding Elements
    gridEl.appendChild(cellEl);
    cellEl.appendChild(cellNumberEl);
    cellNumberEl.append(i + 1);
    
    // Event Click
    cellEl.addEventListener("click", function() {
        cellEl.classList.toggle("active");
        console.log(cellNumberEl.outerText);
    });

    document.querySelector("#play-button").addEventListener("click", function(){
        cellEl.classList.remove("active");
    })
}

