const grid = document.querySelector(".gridContainer");
const resetButton = document.querySelector("#reset");
const input = document.querySelector("#quantity");

//function to create grid squares
createGrid = () => {
    for(i=0; i<256; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
}


//function to update grid

updateGrid = () =>{
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${input.value}, 1fr)`;

    //iteration for create grid squares
    for(let i=0; i< input.value * input.value; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div)
    }
    console.log(input.value);
}

//event listener for drawing element
grid.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("square")) {
    event.target.classList.add("color");
  }
});
//user input event listener
input.addEventListener("change", updateGrid);

//event listener for reset button
resetButton.addEventListener("click", function(){
    grid.innerHTML="";
    input.value="";

    grid.style.setProperty("grid-template-columns",`repeat(16,2fr)`);
    grid.style.setProperty("grid-template-rows",`repeat(16,2fr)`);

    createGrid();
});

createGrid();