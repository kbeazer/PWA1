// Kareem K. Beazer
// 10/1/13
// The Dual Assignment

var fighterArray= [{name: 'KABAL',
                    damage: 50,
                    health: 100},
                   {name: 'KRATOS',
                    damage: 50,
                    health: 100}];
var round= 0;
var kabalDiv= document.getElementById("kabal"),
    kratosDiv= document.getElementById("kratos"),
    roundDiv= document.getElementById("round"),
    fightButton= document.getElementById("fight_box");
kabalDiv.innerHTML= fighterArray[0].name+' :  '+ fighterArray[0].health;
kratosDiv.innerHTML= fighterArray[1].name+' :  '+ fighterArray[1].health;
function kingFighter(){
    console.log('BEGIN!!!');
    fightButton.onclick= function fight(){
    var player1Hit= fighterArray[0].damage/ 2,
        player2hit= fighterArray[1].damage/ 2;
        player1Damage= Math.floor(Math.random()*player1Hit);
        player2Damage= Math.floor(Math.random()*player2hit);
        fighterArray[0].health-=player1Damage;
        fighterArray[1].health-=player2Damage;
        var damageResult= winnerSelector();
        if(damageResult== 'no winner'){
            round++;
            kabalDiv.innerHTML= fighterArray[0][2];
            kratosDiv.innerHTML= fighterArray[1][2];
            roundDiv.innerHTML= 'ROUND '+round+' OVER';
        }
        function winnerSelector(){
            var result= 'no winner';
            if(fighterArray[0].health<1 && fighterArray[1].health<1){
                kabalDiv.innerHTML='DOUBLE';
                kratosDiv.innerHTML= 'KO!!!';
                result= 'Double KO';
            }else if(fighterArray[0].health<1){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= fighterArray[1].name+' WINS!!!';
                result= 'Kratos Wins';
            }else if(fighterArray[1].health<1){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= fighterArray[0].name+' WINS!!!';
                result= 'Kabal Wins';
            }else if(round== 10 && fighterArray[0].health<fighterArray[1].health){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= fighterArray[1].name+' WINS!!!';
                result= 'Kratos Wins';
            }else if(round== 10 && fighterArray[0].health>fighterArray[1].health){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= fighterArray[0].name+' WINS!!!';
                result= 'Kabal Wins';
            }else if(round== 10 && fighterArray[0].health== fighterArray[1].health){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= "IT'S A DRAW!!!";
                result= "It's a Draw";
            }return result;
    }
    }
}kingFighter();
//
//    alert(leftFighter[0]+': '+leftFighter[1]+'    VS.    '+rightFighter[0]+': '+rightFighter[1]);
////    for(i=0;i<10;i++){
////        player1Hit= leftFighter[2]/2;
//        player2Hit= rightFighter[2]/2;
//        player1Damage= Math.floor(Math.random()*player1Hit);
//        player2Damage= Math.floor(Math.random()*player2Hit);
//        leftFighter[1]-=player1Damage;
//        rightFighter[1]-=player2Damage;
//        console.log(leftFighter[0]+': '+leftFighter[1]+'   '+rightFighter[0]+': '+rightFighter[1]);
//        var result= winnerSelector();
//        console.log(result);
//
//        if(result=== 'no winner'){
//            round++;
//            alert(leftFighter[0]+': '+leftFighter[1]+'   **Round '+round+' Over**   '+rightFighter[0]+': '+rightFighter[1]);
//        }else{
//            alert(result);
//            break;
//        }if(round== 10 && leftFighter[1]>rightFighter[1]){
//            alert('Game Over '+leftFighter[0]+' '+'Wins!!!')
//        }else if(round== 10 && leftFighter[1]<rightFighter[1]){
//            alert('Game Over '+rightFighter[0]+' '+'Wins!!!')
//        }else if(round== 10 && leftFighter[1]==rightFighter[1]){
//            alert(result);
//        }
//}
//
//function winnerSelector(){
//    var result= 'no winner';
//    if(leftFighter[1]<1 && rightFighter[1]<1){
//        result= ' DOUBLE KO!!'
//   }else if(round== 10 && leftFighter[1]==rightFighter[1]){
//        result= "It's a DRAW!!!"
//   }else if(leftFighter[1]<1){
//        result= 'Game Over '+rightFighter[0]+' '+'Wins!!!';
//   }else if(rightFighter[1]<1){
//        result= 'Game Over '+leftFighter[0]+' '+'Wins!!!'
//            }
//   return result;
//    }
//}
//kingFighter();
