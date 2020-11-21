const arrayToNumber = (array)=>{
   let newNumber = 0
   if (!array) {
      newNumber = 0
   } else {
      let number = ''
      array.forEach(element => {
         number += element
      });
      newNumber = Number(number)
   }
      return newNumber
   } 

   
const addArray = (a,b)=>{
  totalArray = []
   total = arrayToNumber(a) + arrayToNumber(b)
   totalString = total.toString()
   if (total<0) {
      totalArray.push(-totalString.charAt(1))
      for (i=2; i < totalString.length; i++) {
         totalArray.push(+totalString.charAt(i))
  } 
   }   else if (total>0) {
      for (i=0; i < totalString.length; i++) {
         totalArray.push(+totalString.charAt(i))
   } 
}
return totalArray
}

const firstArray = [-2,3]
const secondArray = []


console.log(addArray(firstArray,secondArray))
console.log(addArray([3,2,6,6],[-7,2,2,8]))
console.log(addArray([3,2,9], [1,2])); // Expected output: [3,4,1]
console.log(addArray([4,7,3], [1,2,3])); // Expected output: [5,9,6]
console.log(addArray([1], [5,7,6])); // Expected output: [5,7,7]
console.log(addArray([])); // Expected output: []
console.log(addArray([1], [])); // Expected output: [1]
console.log(addArray([], [1])); // Expected output: [1]
console.log(addArray([1,2], [-1])); // Expected output: [1,1]
console.log(addArray([-1,2], [1])); // Expected output: [-1,1]
console.log(addArray([1,1], [-1,1])); // Expected output: []