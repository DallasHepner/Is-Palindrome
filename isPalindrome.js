// Write your code below

/*
Create function that takes in a string and returns true or false
Expecting numbers - no
Capital and lowercase letters seperate

*/

function palindrome(string) {
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("Noon"))