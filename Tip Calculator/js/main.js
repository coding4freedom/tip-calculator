
//declarations
let percentRadioGruop = document.getElementsByName("percent");
let userInput = document.querySelector('#user_input').value;
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

//data grabs
document.querySelector('#total').addEventListener('click', displayTip);


//functions
function checkUserInput(){
    if(Number.isInteger(parseInt(userInput))){
        convertToDecimal()
    } else{
        return document.querySelector("#result").innerHTML = "You have not entered a valid input"
    }
}

function convertToDecimal(){
    // get this finish getting this code to work
    // take the userinput and the checked radio button value and get total
    // return that total in usda money
    return parseInt(userInput) * percentRadioGruop.checked
}

function displayTip(){
    if(percentRadioGruop.checked){

    }
}
 