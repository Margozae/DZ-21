'use strict';

function reverseNumber(number) {
    let result = 0;
    while (number) {
        result = result * 10 + number % 10;    // eslint-disable-line 
        number = Math.floor(number / 10);    // eslint-disable-line 
    }
    return result;
}

function palindrome(num) {

    if (num === reverseNumber(num)) {
        return num;
    }

    return palindrome(num + reverseNumber(num));

}

palindrome(96);    // eslint-disable-line 


