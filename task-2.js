// ### Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function checkOddEven(number){
    if(number % 2 == 0)
    {
        const result = number/2;
        return result;
    }
    else{
        const result = number*2;
        return result;
    }
}
const evenResult = checkOddEven(10)
console.log(evenResult);
const oddResult = checkOddEven(17)
console.log(oddResult);