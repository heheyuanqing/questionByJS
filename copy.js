/*
* 实现深复制
* */

function deepCopy(inital,final){
    var newObj = final||{};

    for(var i in inital){
        var prop = inital[i];
        //防止循环引用
        if(prop===newObj){
            continue;
        }
        if(typeof inital[i]==='object'){
            newObj[i]=inital[i].constructor===Array?[]:{};
            deepCopy(inital[i],newObj[i]);
        }
        else{
            newObj[i]=inital[i];
        }
    }
    return newObj;
}

function deepClone(obj){
    var newObj;
    if(typeof obj==='object'){
        newObj = obj.constructor===Array?[]:{};
        for(var i in obj){
            if(typeof obj[i] === 'object'){
                newObj=deepClone(obj[i]);
            }
            else{
                newObj[i]=obj[i]
            }
        }
    }
    else{
        newObj=obj;
    }
    return newObj;
}