

window.Person=Person;

function Person(){
    this.name='';
    this.action=Person.actions[Math.floor(Math.random()*Person.actions.length)];
    this.job=Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
}

Person.jobs=['technician','artist','musician','salesman','chef','pilot'];
Person.actions=['sleeping','running','walking','drinking','smoking','studying','talking'];

Person.prototype.update= function(){
    doms.r1c3.innerHTML= people[0].action;
    doms.r2c3.innerHTML= people[1].action;
    doms.r3c3.innerHTML= people[2].action;
};
