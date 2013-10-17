/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function(){
    function Person(n,r){
        this.n=[];
        this.r=[];
    }

    var nameGroup=[],
        names=['Yamira','John','Kareem','Tameeka','Thomas'],
        doms=[
            r1c1=document.querySelector("r1c1"),
            r1c2=document.querySelector("r1c2"),
            r1c3=document.querySelector("r1c3"),
            r2c1=document.querySelector("r2c1"),
            r2c2=document.querySelector("r2c2"),
            r2c3=document.querySelector("r2c3"),
            r3c1=document.querySelector("r3c1"),
            r3c2=document.querySelector("r3c2"),
            r3c3=document.querySelector("r3c3")
        ];

    var people= [];
    function nameSelector(){
        var chosenRow=0;
        this.n=names[Math.random()*names.length];
        doms.forEach(function(e){
            chosenRow+=e;
        });
        for(var i=0;i<3;i++){
            var newGuy=new Person(names[this.n],chosenRow);
            people.push(newGuy);
        }
    }nameSelector();
    console.log(people);


//    for(i=0;i<3;i++){
//
//        var newGuy=new Person(nameGroup[i]);
//        people.push(newGuy)
//    }
//     console.log(people);
//    console.log(nameSelector());
//    console.log(nameGroup);
})();