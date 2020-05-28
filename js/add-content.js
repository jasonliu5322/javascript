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
    var var3 = var1 + var2; 
    var newMessage = document.getElementById('message3');
    if(var1 == 'null' || var2 == null || var1 == '' || var2 == '' ){ 
       newMessage.textContent = ("Your input is invalid, refresh this page.");
    }else{ newMessage.textContent = var3 + " is a name of place?";}  
}
append(name, place);

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



