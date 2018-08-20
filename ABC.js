/*
* 升序A+降序B=不降序C
* */

function getC(arrA,arrB){
    let arr=[],lenA=arrA.length,lenB=arrB.length;
    let flag=false,j=lenB-1, i=0;
    for(i;i<lenA;i++){
        flag=true;
        while(j>=0){
            flag=false;
            if(arrA[i]<arrB[j]){
                arr.push(arrA[i]);
                break;
            }
            else{
                arr.push(arrB[j]);
                j--;
            }
        }
      if(flag){
            arr.push(arrA[i]);
        }
    }
    while(j>=0){
        arr.push(arrB[j]);
        j--;
    }

    return arr;
}
console.log(getC([1,5,8,9,10],[9,8,7,6,5]));