/*r(let i= 0; i <=20 ; i++){
    if(i==12){
        break;
    }else{
        console.log(i)
    }
    console.log(i);
}*/

//Number guessing game
const minimum =1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum ));

let attempts = 0;
let guess;
let running = true;
while(running){
    guess = window.prompt(`Guess the number between ${minimum} - ${maximum}`)
    guess = Number(guess);
   if(isNaN(guess)){
    window.alert(` please enter a valid number `);
   }else if(guess < minimum || guess > maximum ){
    window.alert(` please enter a valid number `);
   }else{
    attempts++;
    if(guess < answer){
        window.alert(`too low !! try again`)
    }
    else if(guess > answer){
        window.alert(`too high !! try again`)
    }
    else{
        window.alert(`correct ! the answer was ${answer} . It took you ${attempts} attempts`)
        running = false;
    }
   }
}