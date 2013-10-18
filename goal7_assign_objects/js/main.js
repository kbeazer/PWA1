/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function(){
    function Person(){
        this.n='';
        this.r='';
    }

    var names=['Yamira','John','Kareem','Tameeka','Thomas'],
        doms={
            r1c1:document.querySelector("r1c1"),
            r1c2:document.querySelector("r1c2"),
            r1c3:document.querySelector("r1c3"),
            r2c1:document.querySelector("r2c1"),
            r2c2:document.querySelector("r2c2"),
            r2c3:document.querySelector("r2c3"),
            r3c1:document.querySelector("r3c1"),
            r3c2:document.querySelector("r3c2"),
            r3c3:document.querySelector("r3c3")
        };

    var people= [],
        rows=[];

    function rowSelector(){
        for(var i in doms){
            var chosenRow='';
            chosenRow+=i;
            rows.push(chosenRow);
        }
    }

    function nameSelector(){
        for(var j=0;j<3;j++){
            var newGuy=new Person();
            newGuy.n=names[Math.round(Math.random()*names.length)];
            newGuy.r=rows[Math.round(Math.random()*rows.length)];
            people.push(newGuy);
        }
    }

    rowSelector();
    nameSelector();
    console.log(people);


})();