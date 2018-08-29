/*
* 二分查找
* */
function search(arr, num) {
    let middle,low = 0, high = arr.length - 1;
    while (low <= high) {
        middle = Math.floor((low+high)/2);
        if(arr[middle]===num){
            return middle;
        }
        if(arr[middle]<num){
            low=middle;
        }
        if(arr[middle]>num){
            high=middle;
        }
    }
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(search(arr, 8));