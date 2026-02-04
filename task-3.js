// ### Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(numbers, size){
    console.log("array numbers are ->" , numbers);
    console.log("array size is ->" , size);
   let sum = 0;
   let average = 0;
   for ( const number of numbers){
    sum = sum + number;
     average = sum/size;
   }
   return average;

}
const array = [10 , 60 , 2 , 40 ,15 ,11];
const size = array.length;
const average = make_avg(array , size);
console.log("average number of this array is -> ",average);