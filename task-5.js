
// ### Task-5 
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
function odd_even(number){
    if(number % 2 == 0)
    {
        const result = `Even`;
        // console.log(even);
        return result;
    }
    else{
        const result = `Odd`;
        // console.log(`Odd`);
        return result;
    }

}
const evenOrOdd = odd_even(16);
console.log(evenOrOdd);
