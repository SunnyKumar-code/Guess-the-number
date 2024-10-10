let max=prompt("Please Enter a maximum Number to Guess Game");

let randomNumber = Math.floor((Math.random() * max)+1);

let guess = prompt("Please Enter a random Number to Guess Game"); 
while(true){
    if(guess==null || guess==NaN || guess=="quit"){
        break;
    }
    if(guess==randomNumber){
        alert("Congratulations, You've guessed the correct number!", "Your Numer is " + randomNumber);
        break;
    }
    else if(guess<randomNumber){
        guess= prompt("Your Guess Number is to Small! Guess your  Number Again!");
    }else{
        guess=prompt("Your Guess Number is to Large! Guess your  Number Again!");
    }
}