function removeDuplicateArray(arr){
  let unique = [];

  for(let item of arr){
    if(!unique.includes(item)){
unique.push(item);
    }
  }
  return unique;
}
console.log(removeDuplicateArray([1,2,2,3,4,4,5]));