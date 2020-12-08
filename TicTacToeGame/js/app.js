//HTML elements
const statusDiv =  document.querySelector('.status'); //grabbing status button
const resetDiv = document.querySelector('.reset'); //grabbing reset button
const cellDivs =  document.querySelectorAll('.game-cell'); //grab all elements where game-cell appears 9 in total
//grabbing these and changing values in it.. manipulate cell pieces
//game variables

let gameIsLive = true; // when game is not live this will be turned to false
let xIsNext = true; //if true then X's turn or then O's

//functions
const checkGameStatus = () =>{
    //make 9 variables and see whether there is x or o in each
    const cone = cellDivs[0].classList[2];
    const ctwo = cellDivs[1].classList[2];
    const cthree = cellDivs[2].classList[2];
    const cfour = cellDivs[3].classList[2];
    const cfive = cellDivs[4].classList[2];
    const csix = cellDivs[5].classList[2];
    const cseven = cellDivs[6].classList[2];
    const ceight = cellDivs[7].classList[2];
    const cnine = cellDivs[8].classList[2];

    console.log(cone, ctwo, cthree, cfour, cfive, csix, cseven, ceight, cnine);
};






//event Handlers functions
const handleReset = (e) => { //e event
    console.log(e);
};

const handleCellClick = (e) => {
    // console.log(e.target.classList); //object that looks like array but is not
    const classList = e.target.classList;
    const location = classList[1]; //extract first index element from classlist //to know which section of cell we are looking at
    console.log("location", location);


    //we need to check that the element in question doesn't have a prev value
    if(classList[2] ==='x' || classList[2] === 'o') { //test and check to see if there is some prev value
        return;
    }
        if(xIsNext){
        //if true then put X there
        //e.target.classList.add('x'); //adds a class to element
        classList.add('x');
        checkGameStatus();
        xIsNext = !xIsNext; //after adding it to X class we want to set it opposite to what it was
        //use pseudoelement in HTML to show actual values       
    }   
        else{
            classList.add('o');
            checkGameStatus();
            xIsNext = !xIsNext;
        }

    };



//event listeners
resetDiv.addEventListener('click', handleReset); //passing function as reference

for(const cellDiv of cellDivs) { //will loop through each element of cell and element will be stored in the element variable here
    //  console.log(cellDiv);
    cellDiv.addEventListener('click', handleCellClick);
}