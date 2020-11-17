// Convert Array to Number
const arrayToNumber = (array)=>{
   if (array.length>0){
      let number = ''
      array.forEach(element => {
         number += element
      });
      newNumber = Number(number)
      return newNumber
   } else {
      return 0
   }  
}
// Sum array and convert back to array
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