
// declarations
// let percentRadioGroup = document.getElementsByName("percent");
//let percentRadioGroup = document.querySelector('input[name="percent"]:checked');
// let percentRadioGroup = document.querySelector('input[name="percent"]:checked');
// let userInput = document.querySelector('#user_input').value;
let unwanted = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','`','!','@','#','$','%','^','&','*','(',')','[',']'];
/*let re =/([0-9]{1,3}\,[0-9]{1,3}+[.]{0,1}[0-9]{0,2})|([0-9]{1,3}\,[0-9]{1,3})|([0-9]{1,3}+[.]{0,1}[0-9]{0,2})/ */
let re =/^(\$?\d{1,3}(?:,?\d{3})*(?:\.\d{2})?|\.\d{2})?$/
let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})
let sam =`7,150.00n`
// document.querySelector('input[name="JTP"]:checked')  
// data grabs
document.querySelector('#total').addEventListener('click', displayTip);


//functions
function checkUserInput(user, radio){ //fix this userinput error problem
    // if(Number.isInteger(parseInt(user))){
    if(!unwanted.includes(...user)){
        if(user.match(re)){//testing out regex code here original line is if(!Number.isNaN(user))
            console.log('checkUserInput if statement ran')
            return convertToDecimal(user, radio)              
        }else{return document.querySelector("#result").innerHTML = "You have not entered a valid input";}    
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

 console.log(sam.match(re)) // returns null if match not found
// fix line 20 user input is taking extra inputs like letters and symbols
// working on regex to filter user input for money here is reges so far
// [0-9]{1,3}\,[0-9]{1,3}+[.]{0,1}[0-9]{1,2}|[0-9]{1,3}\,[0-9]{1,3}
// regex that is working
/* ([0-9]{1,3}\,[0-9]{1,3}+[.]{0,1}[0-9]{0,2}|[0-9]{1,3}\,[0-9]{1,3}|[0-9]{1,3}+[.]{0,1}[0-9]{0,2}) */
/* formal regex for line 9 /[0-9]{1,3}\,[0-9]{1,3}\+[.]{0,1}[0-9]{0,2}|[0-9]{1,3}\,[0-9]{1,3}|[0-9]{1,3}\+[.]{0,1}[0-9]{0,2}/
*/
// line 8 was not working due to not escaping special chars
// line 9 is working for regex but regx is falsing for sample user input (C)
/* discovered that line was not matching due to using wrong flavor or regex from regex101 had to which over to js
*/
// line 9 regex works now only small issue where more number over 3 can be at begining of number
// need to fix userinput so that money decimal is accepted from user input (C)
// way to fix issue change line 32 where the result of the calculation is .toFixed(2) (C)
// remove the parseInt on that line, then you should be able to  (C)