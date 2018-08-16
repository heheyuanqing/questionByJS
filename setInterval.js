let a=1;
setTimeout(function(a){
    console.log("hello world!");
    setTimeout(arguments.callee,1000);
},1000);