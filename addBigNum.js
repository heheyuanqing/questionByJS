/*
* 思路：
* 1.记录进位
* 2.从最低位开始相加
* */

function add(num1, num2) {
    let b1 = num1.toString().split("").reverse(),
        b2 = num2.toString().split("").reverse();
    let len1=b1.length,len2=b2.length;
    let res = [], carry = 0;

    if(len1===len2){
        for(let i=0;i<len1;i++){
            let sum = (parseInt(b1[i])+parseInt(b2[i])+carry)%10;
            carry = Math.floor((parseInt(b1[i])+parseInt(b2[i])+carry)/10);
            res.push(sum);
        }
    }
    else if(len1<len2){
        for(let i=0;i<len1;i++){
            let sum = (parseInt(b1[i])+parseInt(b2[i])+carry)%10;
            carry =Math.floor((parseInt(b1[i])+parseInt(b2[i])+carry)/10);
            res.push(sum);
        }
        for(let i=len1;i<len2;i++){
            let sum=(parseInt(b2[i])+carry)%10;
            carry = Math.floor((parseInt(b2[i])+carry)/10);
            res.push(sum);
        }

    }
    else{
        for(let i=0;i<len2;i++){
            let sum = (parseInt(b1[i])+parseInt(b2[i])+carry)%10;
            carry = Math.floor((parseInt(b1[i])+parseInt(b2[i])+carry)/10);
            res.push(sum);
        }
        for(let i=len2;i<len1;i++){
            let sum=(parseInt(b1[i])+carry)%10;
            carry = Math.floor((parseInt(b1[i])+carry)/10);
            res.push(sum);
        }
    }
    res=parseInt(res.reverse().join(""));
        return res;

}

console.log(add(12345, 1));