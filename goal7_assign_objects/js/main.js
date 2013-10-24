

(function(){
    var names=['Yamira','John','Kareem','Tameeka','Thomas','James','Antonio','Charisma','Leann'];
    window.doms={
            r1c1:document.querySelector("#r1c1"),
            r1c2:document.querySelector("#r1c2"),
            r1c3:document.querySelector("#r1c3"),
            r2c1:document.querySelector("#r2c1"),
            r2c2:document.querySelector("#r2c2"),
            r2c3:document.querySelector("#r2c3"),
            r3c1:document.querySelector("#r3c1"),
            r3c2:document.querySelector("#r3c2"),
            r3c3:document.querySelector("#r3c3")
        };

     window.people= [];
     var rows=['r1c1','r2c1','r3c1'];


    function nameSelector(){
        for(var j=0;j<3;j++){
            var newGuy=new Person();
            newGuy.name=names[Math.floor(Math.random()*names.length)];
            newGuy.row=rows[Math.floor(Math.random()*rows.length)];
            people.push(newGuy);
        }
    }

    function populateHTML(){
        if(people[1].name==people[0].name || people[1].name==people[2].name || people[0].name==people[2].name){
            nameSelector();
            populateHTML();
        }else{
            doms.r1c1.innerHTML=people[0].name;
            doms.r1c2.innerHTML=people[0].job;
            doms.r2c1.innerHTML=people[1].name;
            doms.r2c2.innerHTML=people[1].job;
            doms.r3c1.innerHTML=people[2].name;
            doms.r3c2.innerHTML=people[2].job;
        }
    }
    var interval=setInterval(runUpdate, 1000 / 30);

    function runUpdate(){
        people.forEach(function(element){
            element.update();
        });
    }
    nameSelector();
    populateHTML();
    runUpdate();
    console.log(people)
})();


