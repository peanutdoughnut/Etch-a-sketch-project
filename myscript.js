const grid = document.querySelector(".gridContainer");
const userInput = document.querySelector("quantity");
const resetButton = document.querySelector(".reset")

createGrid = () => {
    for(let i=0; i<256; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

updateGrid = () => {
    grid.innerHTML ="";
    grid.Style.setProperty("grid-template-columns",`repeat(${userInput.value},sfr)`);
    grid.style.setProperty("grid-template-rows",`repeat(${userInput.value},2fr)`);

    for(i=0; i<userInput.Value*userInput.value; i++){
        const div = document.createElement("div")
        div.classList.add("square");
        grid.appendChild(div);
    }
    console.log(userInput.value);

};

const square = document.querySelector("div");
square.addEventListener("mouseover" ,function(event){
    event.target.classList.replace("square","color");
});

userInput.addEventListener("click", function(){
    grid.innerHTML="";
    userInput.value="";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-row", `repeat(16,2fr)`);    
    createGrid();
});

createGrid();

