
// declarations
// let percentRadioGroup = document.getElementsByName("percent");
//let percentRadioGroup = document.querySelector('input[name="percent"]:checked');
// let percentRadioGroup = document.querySelector('input[name="percent"]:checked');
// let userInput = document.querySelector('#user_input').value;
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
// document.querySelector('input[name="JTP"]:checked')  
// data grabs
document.querySelector('#total').addEventListener('click', displayTip);


//functions
function checkUserInput(user, radio){ //fix this userinput error problem
    if(Number.isInteger(parseInt(user))){
        return convertToDecimal(user, radio)
        console.log('checkUserInput if statement ran')
    } else{
        console.log('checkUserInput else statement ran')
        console.log(user)
        return document.querySelector("#result").innerHTML = "You have not entered a valid input";
    }
}

function convertToDecimal(price,radio){
    // get this finish getting this code to work
    // take the userinput and the checked radio button value and get total
    // return that total in usda money
     let cost = (parseInt(price)/100) * radio.value;
     console.log(`convertToDecimal function ran cost is ${cost}`)
     console.log(USDollar.format(cost))
     return USDollar.format(cost);
}

function displayTip(){
    let userInput = document.querySelector('#user_input').value;
    let percentRadioGroup = document.querySelector('input[name="percent"]:checked');

    if(percentRadioGroup){
        console.log('displayTip if statement ran')
        // fix this line output
        return document.querySelector("#result").innerHTML = `${checkUserInput(userInput,percentRadioGroup)}`
    }
    console.log('displayTip ran outside of if statment')
}
 
// need to fix userinput so that money decimal is accepted from user input