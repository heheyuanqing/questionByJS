/*
* 数组中出现次数最多的元素
* */
function maxCount(arr) {
    let res = {};
    arr.map((value, index) => {
        if (Object.keys(res).indexOf((value + "")) !== -1) {
            res[value]++;
        }
        else {
            res[value] = 1;
        }
    });
    let max = 0, maxIndex;
    for (let i in res) {
        if (res[i] > max) {
            max = res[i];
            maxIndex = i;
        }
    }
    return maxIndex;

}

function max(arr){
    let map=new Map();
    arr.map((value)=>{
        if(map.has(value)){
            let n=map.get(value)+1;
            map.set(value,n);
        }else{
            map.set(value,1);
        }
    });
    let mapValue = Array.from(map.values());
    let max=Math.max.apply(null,mapValue);
    for(let key of map.keys()){
        if(max === map.get(key)){
            return key;
        }
    }

}

arr = [1, 2, 3, 4, 1, 1, 6];
console.log(max(arr));

