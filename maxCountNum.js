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
   let max=0,maxIndex;
   for(let i in res){
       if(res[i]>max){
           max=res[i];
           maxIndex=i;
       }
    }
    return maxIndex;

}

arr = [1, 2, 3, 4, 1, 3, 6];
console.log(maxCount(arr));

