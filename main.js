// Create grid container
let containerDiv = document.createElement('div');
containerDiv.className = 'container';
containerDiv.style.margin = '0px auto 0';
containerDiv.style.border = '5px solid black';
containerDiv.style.borderRadius = '5px';
containerDiv.style.display = 'grid';
containerDiv.style.gridTemplateColumns = 'repeat(16, 1fr)';
containerDiv.style.gridTemplateRows = 'repeat(16, 1fr)';
containerDiv.style.marginTop = '5%';
containerDiv.style.height = '85%'; 
containerDiv.style.width = '90%';
containerDiv.style.justifyContent = 'center';

// Create variable for grid size on start
let gridSize = 16;

// Create variable for individual box
let squares = [];

// Create individual boxes and get individual box value
function createGrid(gridSize){
    squares = [];
    containerDiv.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    containerDiv.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for(let i = 0; i < gridSize * gridSize; i++){
        box = document.createElement('div');
        box.style.border = '1px solid black';
        box.style.backgroundColor = '#7f99b1';
        squares.push(box);
        containerDiv.appendChild(box);
    }
}

// Create standard 16 x 16 grid on start up
createGrid(gridSize);

// Change color of box on mouseover
function changeColor(){
        for(let i = 0; i < squares.length; i++){
            squares[i].addEventListener('mouseover', changeColor);
            squares[i].addEventListener('mousedown', revertColor);
        function changeColor(e){
            e.target.style.backgroundColor = '#ff6700';
        }
        function revertColor(e){
            e.target.style.backgroundColor = '#7f99b1';
        }
    }
}

function getRandomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColorRandom(){
        removeBoxes();
        for(let i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = '#7f99b1';
        }
        gridSize = prompt('How many squares per side?');
        createGrid(gridSize);
        for(let i = 0; i < squares.length; i++){
            squares[i].addEventListener('mouseover', changeColor);
            squares[i].addEventListener('mousedown', revertColor);
        function changeColor(e){
            e.target.style.backgroundColor = getRandomColor();
        }
        function revertColor(e){
            e.target.style.backgroundColor = '#7f99b1';
        }
    }
}

// Run changeColor on start up
changeColor();

// Create clear button
let clearBtn = document.createElement('button');
clearBtn.appendChild(document.createTextNode('Clear'));
clearBtn.addEventListener('click', clearBox);

// Create random color button
let randColorBtn = document.createElement('button');
randColorBtn.appendChild(document.createTextNode('Random Color'));
randColorBtn.addEventListener('click', changeColorRandom);

// Clear squares and gets variable for new number of squares per side
function clearBox(){
    removeBoxes();
    for(let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = '#7f99b1';
    }
    gridSize = prompt('How many squares per side?');
    createGrid(gridSize);
    changeColor();
}

function removeBoxes(){
    while(containerDiv.hasChildNodes()){
        containerDiv.removeChild(containerDiv.firstChild);
    }
}

// Insert elements into HTML
document.body.appendChild(clearBtn);
document.body.appendChild(randColorBtn);
document.body.appendChild(containerDiv);