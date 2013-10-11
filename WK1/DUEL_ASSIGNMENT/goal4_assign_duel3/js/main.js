// Kareem K. Beazer
// 10/1/13
// The Dual Assignment

var fighterArray= [{name: 'KABAL', damage: 50, health: 100}, {name: 'KRATOS', damage: 50, health: 100}];
var round= 0,
    kabalDiv= document.getElementById("kabal"),
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
            kabalDiv.innerHTML= fighterArray[0].name+' :  '+ fighterArray[0].health;
            kratosDiv.innerHTML= fighterArray[1].name+' :  '+ fighterArray[1].health;
            roundDiv.innerHTML= 'ROUND '+round+' OVER';
        }
        function winnerSelector(){
            var result= 'no winner';
            if(fighterArray[0].health<1 && fighterArray[1].health<1){
                kabalDiv.innerHTML='DOUBLE';
                kratosDiv.innerHTML= 'KO!!!';
                result= 'Double KO';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(fighterArray[0].health<1){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= fighterArray[1].name+' WINS!!!';
                result= 'Kratos Wins';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(fighterArray[1].health<1){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= fighterArray[0].name+' WINS!!!';
                result= 'Kabal Wins';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(round== 10 && fighterArray[0].health<fighterArray[1].health){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= fighterArray[1].name+' WINS!!!';
                result= 'Kratos Wins';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(round== 10 && fighterArray[0].health>fighterArray[1].health){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= fighterArray[0].name+' WINS!!!';
                result= 'Kabal Wins';
                fightButton.onclick= document.getElementById("fight_box").disabled;
            }else if(round== 10 && fighterArray[0].health== fighterArray[1].health){
                kabalDiv.innerHTML='GAME OVER';
                kratosDiv.innerHTML= "IT'S A DRAW!!!";
                result= "It's a Draw";
                document.getElementById("fight_box").disabled= true;
            }return result;
    }
    }
}kingFighter();

