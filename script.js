const container = document.querySelector(".container");
const input = document.getElementById("sizeInput");
const submitBtn = document.getElementById("submitBtn");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const colorInput = document.getElementById("colorInput");
const rainbowBtn = document.getElementById("rainbow");
const fillBtn = document.getElementById("fill");
const shadowBtn = document.getElementById("shadow");
let inputText = document.getElementById("inputText");

let inputSize = 16;
let erase = false;
let rainbow = false;
let shadow = false;
let colorValue = "black";
let mousedown = false;

function createGrid(n) {
    for(let i = 0 ; i < n ; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0 ; j < n ; j++) {
            let col = document.createElement("div");
            col.classList.add("col");

            col.addEventListener("mouseenter", (e) => {
                if(!mousedown) return;
                if(erase) {
                    e.target.style.background = "";
                    // e.target.style.cursor = "grab";
                }
                else {
                    if(rainbow) {
                        let r = Math.ceil(255*Math.random());
                        let g = Math.ceil(255*Math.random());
                        let b = Math.ceil(255*Math.random());
                        e.target.style.background = `rgb(${r}, ${g}, ${b})`;
                        e.target.style.opacity = 1;
                    }
                    else if(shadow) {
                        let opa = Number(e.target.style.opacity) || 0;
                        opa = Math.min(1, opa + 0.1);
                        e.target.style.opacity = opa;
                        e.target.style.background = "black";
                    }
                    else {
                        e.target.style.background = colorValue;
                        e.target.style.opacity = 1;
                    }
                    // e.target.style.cursor = "pointer";
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
    else {
        createGrid(inputSize);
    }
});

eraser.addEventListener("click", () => {
    erase = !erase;
    if(erase) {
        eraser.style.background = "red";

        rainbow = false;
        rainbowBtn.style.background = "#3b82f6";

        shadow = false;
        shadowBtn.style.background = "#3b82f6";
    }
    else eraser.style.background = "#3b82f6";
});

rainbowBtn.addEventListener("click", () => {
    rainbow = !rainbow;
    if(rainbow) {
        rainbowBtn.style.background = "red" ;

        erase = false;
        eraser.style.background = "#3b82f6";

        shadow = false;
        shadowBtn.style.background = "#3b82f6";
    }
    else rainbowBtn.style.background = "#3b82f6"
});

shadowBtn.addEventListener("click", () => {
    shadow = !shadow;
    if(shadow) {
        shadowBtn.style.background = "red" ;

        erase = false;
        eraser.style.background = "#3b82f6";

        rainbow = false;
        rainbowBtn.style.background = "#3b82f6";
    }
    else shadowBtn.style.background = "#3b82f6";
});

clear.addEventListener("click", () => {
    container.innerHTML = "";
    createGrid(inputSize);
});

colorInput.addEventListener("input", (e) => {
    colorValue = colorInput.value;
});

input.addEventListener("input", () => {
    inputText.textContent = `Grid : ${input.value} x ${input.value}`;
});

fillBtn.addEventListener("click", () => {
    let col = document.querySelectorAll(".col");
    col.forEach(box => {
        box.style.background = colorValue;
        box.style.opacity = 1;
    });
});

document.addEventListener("mousedown", () => mousedown = true);
document.addEventListener("mouseup", () => mousedown = false);
// let col = document.querySelectorAll(".col");
// col.forEach(box => {
//     box.addEventListener("mouseenter", (e) => {
//         e.target.style.background = "black";
//     });
// });