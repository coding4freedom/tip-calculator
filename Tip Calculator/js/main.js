
// declarations
// let percentRadioGroup = document.getElementsByName("percent");
//let percentRadioGroup = document.querySelector('input[name="percent"]:checked');
let percentRadioGroup = document.querySelector('input[name="percent"]');
// let userInput = document.querySelector('#user_input').value;
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
// document.querySelector('input[name="JTP"]:checked')  
// data grabs
document.querySelector('#total').addEventListener('click', displayTip);


//functions
function checkUserInput(user){ //fix this userinput error problem
    if(Number.isInteger(parseInt(user))){
        return convertToDecimal(user)
        console.log('checkUserInput if statement ran')
    } else{
        console.log('checkUserInput else statement ran')
        console.log(user)
        return document.querySelector("#result").innerHTML = "You have not entered a valid input";
    }
}

function convertToDecimal(price){
    // get this finish getting this code to work
    // take the userinput and the checked radio button value and get total
    // return that total in usda money
     let cost = (parseInt(price)/100) * percentRadioGroup.value;
     console.log(`convertToDecimal function ran cost is ${cost}`)
     console.log(USDollar.format(cost))
     return USDollar.format(cost);
}

function displayTip(){
    let userInput = document.querySelector('#user_input').value;
    
    if(percentRadioGroup.checked){
        console.log('displayTip if statement ran')
        // fix this line output
        return document.querySelector("#result").innerHTML = `${checkUserInput(userInput)}`
    }
    console.log('displayTip ran outside of if statment')
}
 
// App only works when first radio button is checked, look into placing
// the radio button selector in a for loop might have to also pass in 
// radio button to checkUserInput function to calculat cost in 
//  convertToDecimal