
// declarations
// let percentRadioGroup = document.getElementsByName("percent");
//let percentRadioGroup = document.querySelector('input[name="percent"]:checked');
// let percentRadioGroup = document.querySelector('input[name="percent"]:checked');
// let userInput = document.querySelector('#user_input').value;
let unwanted = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','`','!','@','#','$','%','^','&','*','(',')','[',']']
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
// document.querySelector('input[name="JTP"]:checked')  
// data grabs
document.querySelector('#total').addEventListener('click', displayTip);


//functions
function checkUserInput(user, radio){ //fix this userinput error problem
    // if(Number.isInteger(parseInt(user))){
    if(!unwanted.includes(...user)){
        if(!Number.isNaN(user)){
            console.log('checkUserInput if statement ran')
            return convertToDecimal(user, radio)              
    }    
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
    // let cost = (parseInt(price)/100) * radio.value;
     let cost = parseFloat(price) * radio.value;
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
 
// fix line 20 user input is taking extra inputs like letters and symbols
// working on regex to filter user input for money here is reges so far
// [0-9]{1,3}\,[0-9]{1,3}+[.]{0,1}[0-9]{1,2}|[0-9]{1,3}\,[0-9]{1,3}
// need to fix so it can account for money under 1,000 with out decimal
// need to fix userinput so that money decimal is accepted from user input (C)
// way to fix issue change line 32 where the result of the calculation is .toFixed(2) (C)
// remove the parseInt on that line, then you should be able to  (C)