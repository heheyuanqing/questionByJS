Array.prototype.makeReverse = function(){
    var arr=this;
    var res =[];

    arr.map((value)=>{
      res.unshift(value);
  });

    return res;
};

console.log([1,2,3,4,5,6].makeReverse());