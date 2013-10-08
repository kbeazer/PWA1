// Kareem K. Beazer
// 10/1/13
// The Dual Assignment

var leftFighter= 'KABAL';
var rightFighter= 'KRATOS';
var leftHealth= 100;
var rightHealth= 100;
var leftDamage= 50;
var rightDamage= 50;
var round= 0;

function kingFighter(){
    console.log('BEGIN!!!');
    alert(leftFighter+': '+leftHealth+'    VS.    '+rightFighter+': '+rightHealth);
    for(i=0;i<10;i++){
        player1Hit= leftDamage/2;
        player2Hit= rightDamage/2;
        player1Damage= Math.floor(Math.random()*player1Hit);
        player2Damage= Math.floor(Math.random()*player2Hit);
        leftHealth-=player1Damage;
        rightHealth-=player2Damage;
        console.log(leftFighter+': '+leftHealth+'   '+rightFighter+': '+rightHealth);
        var result= winnerSelector();
        console.log(result);

        if(result=== 'no winner'){
            round++;
            alert(leftFighter+': '+leftHealth+'   **Round '+round+' Over**   '+rightFighter+': '+rightHealth);
        }else{
            alert(result);
            break;
        }if(round== 10 && leftHealth>rightHealth){
            alert('Game Over '+leftFighter+' '+'Wins!!!')
        }else if(round== 10 && leftHealth<rightHealth){
            alert('Game Over '+rightFighter+' '+'Wins!!!')
        }else if(round== 10 && leftHealth==rightHealth){
            alert(result);
        }
}

function winnerSelector(){
    var result= 'no winner';
    if(leftHealth<1 && rightHealth<1){
        result= 'TKO!!'
   }else if(round== 10 && leftHealth==rightHealth){
        result= "It's a DRAW!!!"
   }else if(leftHealth<1){
        result= 'Game Over '+rightFighter+' '+'Wins!!!';
   }else if(rightHealth<1){
        result= 'Game Over '+leftFighter+' '+'Wins!!!'
            }
   return result;
    }
}
kingFighter();
