
Array.prototype.makeReducer=function(){
    if (arguments.length < 1) {
        throw "need some arg";
    }
    let pre, fn;
    if (arguments.length === 2) {
        pre = arguments[0];
        fn = arguments[1];
    }
    else fn = arguments[0];
    if (typeof fn !== 'function') {
        throw fn + "is not a function";
    }

    let arr=this,len=this.length,index=1,cur;

    if(index<=len&&index>1){
        pre = arr[index-1];
    }

    for(;index<len;index++){
        cur=arr[index];
        pre = fn(pre,cur,index,arr);
    }
    return pre;
};

let arr=[1,2,3,4,5,6];
let sum=arr.makeReducer((pre,cur,index,arr)=>{
    return pre+cur;
});
console.log(sum);