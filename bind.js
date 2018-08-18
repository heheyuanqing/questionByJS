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
s(1,2);