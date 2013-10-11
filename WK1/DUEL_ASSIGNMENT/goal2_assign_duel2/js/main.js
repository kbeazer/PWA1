// Kareem K. Beazer
// 10/1/13
// The Dual Assignment

var leftFighter= ['KABAL', 100, 50],
    rightFighter= ['KRATOS', 100, 50],
    round= 0;

function kingFighter(){
    console.log('BEGIN!!!');
    alert(leftFighter[0]+': '+leftFighter[1]+'    VS.    '+rightFighter[0]+': '+rightFighter[1]);
    for(i=0;i<10;i++){
        player1Hit= leftFighter[2]/2;
        player2Hit= rightFighter[2]/2;
        player1Damage= Math.floor(Math.random()*player1Hit);
        player2Damage= Math.floor(Math.random()*player2Hit);
        leftFighter[1]-=player1Damage;
        rightFighter[1]-=player2Damage;
        console.log(leftFighter[0]+': '+leftFighter[1]+'   '+rightFighter[0]+': '+rightFighter[1]);
        var result= winnerSelector();
        console.log(result);

        if(result=== 'no winner'){
            round++;
            alert(leftFighter[0]+': '+leftFighter[1]+'   **Round '+round+' Over**   '+rightFighter[0]+': '+rightFighter[1]);
        }else{
            alert(result);
            break;
        }if(round== 10 && leftFighter[1]>rightFighter[1]){
            alert('Game Over '+leftFighter[0]+' '+'Wins!!!')
        }else if(round== 10 && leftFighter[1]<rightFighter[1]){
            alert('Game Over '+rightFighter[0]+' '+'Wins!!!')
        }else if(round== 10 && leftFighter[1]==rightFighter[1]){
            alert(result);
        }
}

function winnerSelector(){
    var result= 'no winner';
    if(leftFighter[1]<1 && rightFighter[1]<1){
        result= ' DOUBLE KO!!'
   }else if(round== 10 && leftFighter[1]==rightFighter[1]){
        result= "It's a DRAW!!!"
   }else if(leftFighter[1]<1){
        result= 'Game Over '+rightFighter[0]+' '+'Wins!!!';
   }else if(rightFighter[1]<1){
        result= 'Game Over '+leftFighter[0]+' '+'Wins!!!'
            }
   return result;
    }
}
kingFighter();
