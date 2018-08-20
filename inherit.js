function Person(name){
    var age=100;
    this.name = name;
    this.sex="man";
}
Person.prototype.getName=function (){
    console.log(this.name);
};
function Man(name){
    Person.call(this,name);

}
Man.prototype = new Person();
Man.prototype.constructor = Man;

let hyq = new Man("xixixi");
hyq.getName();
console.log(hyq.age);
console.log(hyq.sex);