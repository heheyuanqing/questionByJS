/*
* KMP算法 匹配字符串
*
* 核心：生成next数组
* */

function kmp(Str, Ptr) {
    let next=getNext(Str),position;
    for(let j=0;j<Str.length;j++){
        position=j;
        for(let i=0;i<Ptr.length;i++){
            if(Str[j]!==Ptr[i]){
                i=0;
                j=next[j]-1;
                break;
            }
        }
    }

}

function getNext(Str) {
    let res = [], pre, sub,cur;
    let len = Str.length;
    for (let i = 0; i <len;i++) {
        cur=Str.slice(0,i+1);
        for(let j=0;j<cur.length-1;j++){
            pre=cur.slice(0,j+1);
            sub=cur.slice(cur.length-j+1);
            if(pre===sub){
                res.push(pre.length);
            }
        }

    }
    return res;
}