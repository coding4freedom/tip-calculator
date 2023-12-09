
//declarations
// let percentRadioGroup = document.getElementsByName("percent");
let percentRadioGroup = document.querySelector('input[name="percent"]:checked');
let userInput = document.querySelector('#user_input').value;
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
// document.querySelector('input[name="JTP"]:checked')  
//data grabs
document.querySelector('#total').addEventListener('click', displayTip);


//functions
function checkUserInput(){ //fix this userinput error problem
    if(Number.isInteger(parseInt(userInput))){
        convertToDecimal()
        console.log('checkUserInput if statement ran')
    } else{
        console.log('checkUserInput else statement ran')
        return document.querySelector("#result").innerHTML = "You have not entered a valid input";
    }
}

function convertToDecimal(){
    // get this finish getting this code to work
    // take the userinput and the checked radio button value and get total
    // return that total in usda money
     let cost = parseInt(userInput) * percentRadioGroup.parseInt(value);
     console.log(`convertToDecimal function ran cost is ${cost}`)
     return USDollar.format(cost);
}

function displayTip(){
    if(percentRadioGroup.checked){
        console.log('displayTip if statement ran')
        return document.querySelector("#result").innerHTML = `${checkUserInput()}`
    }
    console.log('displayTip ran outside of if statment')
}
 