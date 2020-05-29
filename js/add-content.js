
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

/*var user_name, place; 
user_name = window.prompt("What is your name?");
//console.log(user_name);
//console.log(place);

function append(var1, var2){
    var flag1 = true;
    var flag2 = true;
    while(flag1){
        //var var3 = var1 + var2; 
        //var newMessage = document.getElementById('message3');
        if (var1 == null ||  var1 == ''){ 
            //newMessage.textContent = ("Your input is invalid, refresh this page.");
            var name1 = window.prompt("Your input is invalid, please input your name again?");// Prompt user input again
            var1 = name1; // Set new value to arguments
        } else { 
            //newMessage.textContent = var3 + " is a name of place?";
            flag1 = false;// Set condition to false
        }
   }
   place = window.prompt("Where are you living?");
   var2 = place;
   while(flag2){
       if(var2 == null || var2 == ''){
             var place1 = window.prompt("Your input is invalid, please input your place again?");
             var2 = place1;
       }else { 
        flag2 = false;
    }
   }
   user_name = var1; 
   place = var2;// For cases with more than one input 
}
append(user_name, place);*/

var user_name, place;
function append(){
    var flag1 = true;
    var flag2 = true;
    user_name = window.prompt("What is your name?");//prompt user input name
    while(flag1){
        if (user_name == null ||  user_name == ''){ 
            user_name = window.prompt("Your input is invalid, please input your name again?");// Prompt user input again
        } else {             
            flag1 = false;
        }
    }
    place = window.prompt("Where are you living?");//prompt user input place
    while(flag2){
        if(place == null || place == ''){
            place = window.prompt("Your input is invalid, please input your place again?");
        }else { 
            flag2 = false;
        }
    }
 }
append();

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
    var mes = "Hi " + user_name + ", thanks for visiting my page!^-^"
    var mes1 = place + " is an amazing place!"
    var newMessage = document.getElementById('message');
    newMessage.textContent = mes;
    var newMessage = document.getElementById('message1');
    newMessage.textContent = mes1;
}
updateMessage();
updateMessage();



