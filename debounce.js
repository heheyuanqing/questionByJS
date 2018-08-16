/*
* 限制函数下次调用之前需等待的时间间隔
* */
function debounce(fn,delay){
    let timer = null;
    return function (){
        let context = this,
            arg=arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            fn.apply(context,arg);
        },delay);
    }
}

/*
* */