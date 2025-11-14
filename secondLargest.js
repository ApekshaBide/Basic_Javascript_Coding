function secondLargest(arr){
  let first = -Infinity;
  let second = -Infinity;

  for(let num of arr){
    if(num >first){
      second = first;
      first =num;
    }
    else if(num > second && num !== first){
      second =num;
    }
    
  }
  return second;
}
console.log(secondLargest([3,5,1,4,2])); //4
