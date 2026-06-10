const container = document.querySelector(".container");
const input = document.getElementById("sizeInput");
const submitBtn = document.getElementById("submitBtn");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const colorInput = document.getElementById("colorInput");

let inputSize = 16;
let erase = false;
let colorValue = "black";
function createGrid(n) {
    for(let i = 0 ; i < n ; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0 ; j < n ; j++) {
            let col = document.createElement("div");
            col.classList.add("col");

            col.addEventListener("mouseenter", (e) => {
                if(erase) {
                    e.target.style.background = "";
                    e.target.style.cursor = "grab";
                }
                else {
                    e.target.style.background = `${colorValue}`;
                    e.target.style.cursor = "pointer";
                }
            });

            row.appendChild(col);
        }
        container.appendChild(row);
    }
}
createGrid(inputSize);
submitBtn.addEventListener("click", () => {
    inputSize = Number(input.value);
    container.innerHTML = "";
    if(inputSize > 100 || inputSize < 1) alert("Enter between 1 to 100 only");
    else createGrid(inputSize);
});

eraser.addEventListener("click", () => {
    erase = !erase;
    if(erase) eraser.style.background = "red";
    else eraser.style.background = "#3b82f6";
});

clear.addEventListener("click", () => {
    container.innerHTML = "";
    createGrid(inputSize);
});

colorInput.addEventListener("input", (e) => {
    colorValue = colorInput.value;
});
// let col = document.querySelectorAll(".col");
// col.forEach(box => {
//     box.addEventListener("mouseenter", (e) => {
//         e.target.style.background = "black";
//     });
// });