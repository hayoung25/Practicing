// Selectors
const container = document.querySelector(".container");
const containerRow = document.querySelector(".container-row");
const parentBlock = document.querySelector(".parentBlock");
const row = document.querySelector(".row");
const block = document.querySelector(".block");


// Event Listeners
container.addEventListener('click', createInput);


// Functions
function createInput(e) {
    const input = document.createElement('input');
    const block = e.target;
    const paragraph= document.createElement('p')
    
    console.log(block.classList[0])
    // Create input
    if (block.classList[0] === "block") {
        block.innerHTML =""
        block.appendChild(input);
        block.appendChild(paragraph);
        input.classList.add("new-input");
        paragraph.classList.add("new-paragraph");
    } else if (block.classList[0] === "new-paragraph") {
        block.remove();
    }

    // Add value in a box
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const newInput = block.querySelector('.new-input');
            const newParagraph = block.querySelector('.new-paragraph');
            const inputValue = newInput.value;
            block.removeChild(newInput)
            newParagraph.innerHTML = inputValue;
        }
    })    
}

