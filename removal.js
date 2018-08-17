/*
* 实现去重
* */
function removalBySet(arr){
    let arrSet = new Set(arr);
    return  Array.from(arrSet);
}

function removal(arr){
    let res=[];
    arr.map((value,index,arr)=>{
        if(arr.indexOf(value,index+1)==-1){
            res.push(value);
        }
    });
    return res;
}

function removal2(arr){
    let i,len=arr.length,res=[];
    arr.sort((a,b)=>{return a-b});
    res.push(arr[0]);
    for(i=1;i<len;i++){
        if(arr[i]!==res[res.length-1]){
            res.push(arr[i]);
        }
    }
    return res;
}

let arr=[1,2,3,2,2,2,1,1];
// console.log(removal2(arr));

/*
* 实现拍平
* */

function clap(arr){
   arr=arr.join(",");
   return arr.split(",").map(str=>+str)
}

function clap2(arr){
    return arr.reduce((pre,cur)=>{
        return Array.isArray(cur)?[...pre,...clap2(cur)]:[...pre,cur]
    },[]);
}

function clap3(arr){
    let flat=[];

    return function flatten(arr){
        for(let i=0;i<arr.length;i++){
            Array.isArray(arr[i])?flatten(arr[i]):flat.push(arr[i]);
        }
        return flat;
    };

}

let arrx=[1,2,3,4,[3,3,5,5],3];
console.log(clap3()(arrx));