var today= new Date();
var hourNow = today.getHours(); var greeting;
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) { 
    greeting = 'Good afternoon!';
} else if (hourNow > 0) { 
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}
document.write( '<h3>' + greeting + '</h3>');

var name = window.prompt("What is your name?");
var place = window.prompt("Where are you living?")

function append(var1, var2){
    var flag = true;
    while(flag){
        var var3 = var1 + var2; 
        var newMessage = document.getElementById('message3');
        if(var1 == null || var2 == null || var1 == '' || var2 == ''){ 
            newMessage.textContent = ("Your input is invalid, refresh this page.");
            var name1 = window.prompt("What is your name?");// Prompt user input again
            var place1 = window.prompt("Where are you living?");
            var1 = name1; var2 = place1;// Set new value to arguments
        }else{ 
            newMessage.textContent = var3 + " is a name of place?";
            flag = false;// Set condition to false
        }  
   }name = var1; place = var2;// For cases with more than one input 
}
append(name, place);

var num = window.prompt("How many numbers do you want to add to this page?")
function addNumber(number){
    var newMessage = document.getElementById('message3');
    var Message = '';
    for(var i = 0; i < number; i++){
        Message +=  ((i + 1) + ' ');
    }
    newMessage.textContent = "Your number list:" + Message;
}
addNumber(num);

function updateMessage(){
    var mes = "Hi " + name + ", thanks for visiting my page!^-^"
    var mes1 = place + " is an amazing place!"
    var newMessage = document.getElementById('message');
    newMessage.textContent = mes;
    var newMessage = document.getElementById('message1');
    newMessage.textContent = mes1;
}
updateMessage();
updateMessage();



