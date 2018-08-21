/*
* 在指定的this和参数列表下调用函数
* Function.call(thisArg,[arg1,arg2...])  第一个参数为上下文，第二个参数为参数列表
*
* 思路：
* 1.首先获取当前thisArg即传入的第一个参数，（为null则指向window）
* 2.使当前thisArg获取当前的函数即this
* 3.传入多个参数的情况,获取参数并传入函数中进行计算
* */

Function.prototype.makeCall = function (context) {
    context = context || window;
    context.fn = this;

    /* let args = [];
   for (let i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }*/
    let args=[].slice.call(arguments,1);


    //计算字符串执行代码
    let res = eval('context.fn(' + args + ')');

    delete context.fn;

    return res;
};

Function.prototype.makeApply = function (context,arr) {
    context = context || window;
    context.fn = this;

    if(!arr){
        context.fn();
    }
    let args = [];
    for(let i=0,len=arr.length;i<len;i++){
        args.push('arr['+i+']');
    }
    let res = eval('context.fn(' + args + ')');

    delete context.fn;
    return res;
};

let foo = {
    name: 'hyq',
};
let bar = function (grade, age) {
    console.log(this.name);
    return {
        name: this.name,
        grade: grade,
        age: age
    }
};
var a = bar.makeApply(foo, ["class-2", "18"]);
// var a=bar.makeCall(foo,1,1);
console.log(a);