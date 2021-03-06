
const a = function(val) {
    return console.log(val);
}

console.log("================================ QUE 1=========================")

// 1)
// Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.

num1 = 10;
num2 = 20;

const q1 = function(x, y) {
    if (x === y) {
        return 6*x;
    } else {
        return (x + y);
    }
    }
a(q1(num1, num2)); 

console.log("================================ QUE 2=========================")

// 2)
// Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

const q2 = function(x, y) {
    if ((x+y === 50) || (x === 50 || y === 50)) {
        return true;
    }
}

a(q2(30, 20));

console.log("================================ QUE 3=========================")


// 3)
// Create a function to remove a character at the specified position of a given string and return the new string.

const q3 = function(str, idx) {
    str = str.slice(0, idx) + str.slice(idx + 1);
    return str;
}

a(q3("Experiment",5));  // i will be missing

console.log("================================ QUE 4=========================")

// 4)
//  Create a function to find the largest of three given integers.

const q4 = function(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

a(q4(3,5,35));


console.log("================================ QUE 5=========================")

// 5)
// Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

const q5 = function(num1, num2) {
    if( ((num1 >= 40 && num2 >=40) && (num1 <70 && num2 < 70)) || ( (num1 >= 70 && num2 >=70) && (num1 <100 && num2 < 100) )) {
        return true;
    }
}

a(q5(40,60));

console.log("================================ QUE 6=========================")


// 6) 
// Create a function that creates and returns the specified number of copies of a given string (positive number).

const q6 = function(str, copies) {
    return str.repeat(copies);
}

a(q6("Check_for_3_copies_||",3));

console.log("================================ QUE 7=========================")

// 7)
// Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.

const q7 = function(str) {
    if ( (str.slice(0,3) === "Los") || (str.slice(0,3) === "New") ) {
        return str
    } 
}

a(q7("NewYork"));
a(q7("Los Angeles"));


console.log("================================ QUE 8=========================");

// 8)
// Create a function to calculate the sum of three elements of a given array of integers of length 3.

const q8 = function(arr) {
    return (arr[0] + arr[1] + arr[2]);
}

a(q8([8,9,2]));

console.log("================================ QUE 9=========================");

// 9)
// Create a function to test whether an array of integers of length 2 contains 1 or a 3. 

const q9 = function(arr) {
    for(i = 0; i < 2; i++) {
        if( (arr[i] === 1) || (arr[i+1] === 3) ) {
            return true;
            break
        } else {
            return false;
            break
        }
    }
}

a(q9([0,3]));


console.log("================================ QUE 10=========================")

// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3

const q10 = function(arr) {
    for(i = 0; i < 2; i++) {
        if( (arr[i] === 1) || (arr[i+1] === 3) ) {
            return false;
            break;
        } else {
            return true;
            break;
        }
    }
}

a(q10([0,5]));



console.log("================================ QUE 11=========================")



// 11)
// Create a function to find the longest string from a given array of strings.

const q11 = function(arr) {
    len = 0;
    str = "";
    new_arr = []
    for (i = 0; i < arr.length; i++) {
        new_len = arr[i].length;
        if(new_len >= len ) {
            str = arr[i];
            len = new_len;
        }
    }
    return str
}

a(q11(["Kapil", "Davidd", "Micheal"]));


console.log("================================ QUE 12=========================")


// 12)
// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.


const q12 = function (angle) {
    if (angle <= 90 && angle >= 0) {
        return "Acute";
    } else if( angle === 90) {
        return "Right angle";
    } else if(90 < angle < 180) {
        return "Obtuse angle";
    } else if(angle === 180) {
        return "Straight angle";
    }
}

a(q12(130));

console.log("================================ QUE 13=========================")

// 13)
// Create a function to find the index of the greatest element of a given array of integers

const q13 = function(arr) {
    idx = 0;
    ele = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= ele) {
            idx = i;
        }
    } return idx
}

a(q13([23, 53,8,2435, 356]));



console.log("================================ QUE 14=========================")

// 14)
// Create a function to get the largest even number from an array of integers.

const q14 = function(arr) {
    ele = 0;
    idx = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            if(arr[i] >= ele) {
                ele = arr[i];
                idx = i;
            }
        }
    } 
    return ele;
}

a(q14([12, 35, 467, 49462]));



console.log("================================ QUE 15=========================")



// 15)
// Create a function to check from two given integers, whether one is positive and another one is negative.


const q15 = function(num1, num2) {
    if (num1 * num2 < 0) {
        return true
    } else {
        return false;
    }
}

a(q15(14,-2));


console.log("================================ QUE 16=========================")

// 16)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

const q16 = function(str) {
    if(str.length >= 3) {
        str1 = str.slice(0,3).toLowerCase();
        str2 = str.slice(3).toUpperCase();
        return str1+str2;
    } else{
        return str.toUpperCase;
    }
}

a(q16("Thestars"));


console.log("================================ QUE 17=========================")




// 17)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.


const q17 = function(num1, num2) {
    sum = num1 + num2;
    if(sum >= 50 && sum <= 80) {
        return 65;
    } else {
        return 80;
    }
} 

a(q17(30,41));


console.log("================================ QUE 18=========================")


// 18)
// Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

const q18 = function(num) {
    if(num % 3 === 0) {
        return "Diego";
    } else if(num % 5 === 0) {
        return "Riccardo";
    } else if(num % 7 === 0) {
        return "Stefano";
    } else {
        return num;
    }
}

a(q18(25));



console.log("================================ QUE 19=========================")


// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

const q19 = function(str) {
    arr = str.split(" ");
    new_str = ""

    for (i = 0; i < arr.length;i++) {
        new_str += arr[i][0];
    }
    return (new_str.toUpperCase());
}

a(q19("British Broadcasting Corporation"));




console.log("================================ EXTRA=========================")


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



console.log("================================ EXTRA=========================")



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



console.log("================================ EXTRA=========================")


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


    console.log("================================ QUE E5=========================")


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