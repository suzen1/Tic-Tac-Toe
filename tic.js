let box = document.querySelectorAll(".boxes");
let resetbtn = document.querySelector("#rg");
let trueO = true;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
box.forEach((box)=> {
    box.addEventListener("click", () => {
        console.log ("click");
       box.innertext = 's';
       
        
    });
});