function largestArr(arr){
  let max =-Infinity;

  for(let num of arr){
    if(num > max){
      max = num;
    }
  }
  return max;
}
console.log(largestArr([3,5,1,4,2])); //5