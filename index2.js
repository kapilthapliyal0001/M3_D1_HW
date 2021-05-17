
// EXTRAS 

console.log("================================ QUE E1=========================")


/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/

const e1 = function(str) {
    new_arr = [];
    new_cnt = [];
    max = 1;
    for (i = 0; i < str.length; i++) {
        if (new_arr.includes(str[i]) === false) {
            new_arr.push(str[i]);
            new_cnt.push(1);

        } else { 
            new_idx = new_arr.indexOf(str[i]);
            new_cnt[new_idx] += 1;
            if (new_cnt[new_idx] > max) {
                max = new_cnt[new_idx];
            }
        }
    }
    // a(new_arr[new_cnt.indexOf(max)]);
    // a(new_arr);
    // a(new_cnt);
    // a(max);
     a(new_arr[new_cnt.indexOf(max)]);

}

// a(e1("kaaaapil"));
e1("Kaaaappilllll");


/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

const e2 = function(str1, str2) {

    str1 = str1.replace(/\s/g, '');
    str2 = str2.replace(/\s/g, '');

    new_arr1 = [];
    new_cnt1 = [];
    // max = 1;
    for (i = 0; i < str1.length; i++) {
        if (new_arr1.includes(str1[i]) === false) {
            new_arr1.push(str1[i]);
            new_cnt1.push(1);

        } else { 
            new_idx = new_arr1.indexOf(str1[i]);
            new_cnt1[new_idx] += 1;
            // if (new_cnt1[new_idx] > max) {
            //     // max = new_cnt1[new_idx];
            // }
        }
    }

    new_arr2 = [];
    new_cnt2 = [];
    // max = 1;
    for (i = 0; i < str2.length; i++) {
        if (new_arr2.includes(str2[i]) === false) {
            new_arr2.push(str2[i]);
            new_cnt2.push(1);

        } else { 
            new_idx = new_arr2.indexOf(str2[i]);
            new_cnt2[new_idx] += 1;
            // if (new_cnt[new_idx] > max) {
            //     max = new_cnt[new_idx];
            // }
        }
    }
    if(str1.length != str2.length) {
        return false;
    } else {
        for (i = o; i < str1.length; i++) {
            // str2.indexOf()
        }
    }


}


/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

const e3 = function(str, arr) {

    new_arr = [];
    new_cnt = [];
    max = 1;
    for (i = 0; i < str.length; i++) {
        if (new_arr.includes(str[i]) === false) {
            new_arr.push(str[i]);
            new_cnt.push(1);

        } else { 
            new_idx = new_arr.indexOf(str[i]);
            new_cnt[new_idx] += 1;
            if (new_cnt[new_idx] > max) {
                max = new_cnt[new_idx];
            }
        }
    }

    for (i = 0; i < arr.length;i++) {
        str_check = arr[i];

    }
}


console.log("================================ QUE E4=========================")

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

    const e4 = function(str) {
        if (str.length % 2 === 0) {
            for (i = 0; i< (str.length / 2); i++) {
                if (str[i] === str[str.length -i-1]) {

                } else {
                    return false;
                }
            }
        } else {
            for (i = 0; i < Math.floor(str.length / 2); i++) {
                if (str[i] === str[str.length -i-1]) {

                } else {
                    return false;
                }
            }
        }

        return true;
    }

    a(e4("abbas"));
    a(e4("abba"));


/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const e5 = function(num) {

}

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
