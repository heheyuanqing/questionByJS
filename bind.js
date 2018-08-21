/*
* 返回一个函数，且函数中this指向传入的参数
*
* 思路：
* 1.保存原有参数
* 2.返回一个函数，使用apply改变this指向同时传入bind时参数及现在的参数
* */
Function.prototype.makeBind=function (thisArg){
    let fn=this;
    let arg=[].slice.call(arguments,1);

   let bindFn= function(){
       //判断时否为构造函数
       if(this instanceof bindFn){
           return fn.apply(this,arg.concat([].slice.call(arguments)));
       }
       else{
           return fn.apply(thisArg,arg.concat([].slice.call(arguments)));
       }
    };
    //修改原型对象
   if(fn.prototype){
       bindFn.prototype = this.prototype;
   }

   return bindFn;
};

function f(){
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}
var o = {};
var s = f.makeBind(o, 3, 4);
console.log(s.prototype);
s(1,2);
