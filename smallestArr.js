function smallestArr(arr){
  let min = Infinity;

  for(let num of arr){
    if(num < min){
      min = num;
    }
  }
  return min;
}
console.log(smallestArr([3,5,1,4,2])); //1