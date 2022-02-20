// Selectors
const container = document.querySelector(".container");
const containerRow = document.querySelector(".container-row");
const parentBlock = document.querySelector(".parentBlock");
const row = document.querySelector(".row");

// Event Listeners
const clickEvent = container.addEventListener('click', createInput);
// containerRow.addEventListener('click', (e) => stopPropagation);


//functions
function createInput(e) {
    const newInput = document.createElement('input');
    const block = e.target;

    if (block.classList[0] === "block") {
        block.innerHTML = "";
        block.appendChild(newInput);
        newInput.classList.add("new-input");
        console.log(clickEvent)
    }  

    newInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const inputValue = document.querySelector(".new-input").value;
            console.log(inputValue);
            newInput.remove;
            block.innerHTML = inputValue;
        }
    })    
}
