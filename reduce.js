/*
* reducer(fn[,pre]) 传入函数及初始值
*
* 思路：
* 1.分为有初始值和无初始值
* 2.无初始值时，将数组第一个数作为初始值，进行循环
* 3.有初始值时,使用传入的初始值
* */
Array.prototype.makeReducer=function(){
    if (arguments.length < 1) {
        throw "need some arg";
    }
    let fn = arguments[0];
    if (typeof fn !== 'function') {
        throw fn + "is not a function";
    }

    let arr=this,len=this.length,index,cur,pre;

    if (arguments.length === 2) {
        pre = arguments[1];
        for(index=0;index<len;index++){
            cur=arr[index];
            pre = fn(pre,cur,index,arr);
        }

    }
    else {
        index=1;
        if(index<=len&&index>0){
            pre = arr[index-1];
        }

        for(;index<len;index++){
            cur=arr[index];
            pre = fn(pre,cur,index,arr);
        }
    }



    return pre;
};

let arr=[1,2,3,4,5,6];
let sum=arr.makeReducer((pre,cur,index,arr)=>{
    return pre+cur;
},5);
console.log(sum);