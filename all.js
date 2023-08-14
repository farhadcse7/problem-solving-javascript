//Problem 1: Let’s play a mind game

/* This function will take a "Positive Number" as input parameter.
Multiplies that number by 3, then adds 10, then divides by 2, then subtracts 5 from the quotient and returns result as output.*/

function mindGame(positiveNumber) {
    if ((typeof positiveNumber !== 'number') || (positiveNumber < 0)) {
        return 'please give a positive number as input';
    } else {
        let multiply = positiveNumber * 3;
        let addition = multiply + 10;
        let division = addition / 2;
        let result = division - 5;
        return result;
    }
}

let output1 = mindGame(33);
console.log(output1);

//Problem 2: Finding even or odd

/* This function will take "String" as input parameter and will count string characters. if string have even number of characters function will return even 
and if string have odd number of characters function will return odd */

function evenOdd(name) {
    if ((typeof name !== 'string') || (name.length < 1)) {
        return 'please give a string as input and null string not allowed';
    } else {
        let result = name.length;
        if (result % 2 == 0) {
            return 'even';
        } else {
            return 'odd';
        }
    }
}

let output2 = evenOdd('Phero');
console.log(output2);

//Problem 3: Is Less or Greater than seven

/* This function will take a "Number" as input parameter and then Subtract 7 from that number. If subtraction result less then 7, return the result number. 
But if subtraction result greaterthen 7, return the inputs number as double */

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'please give a number as input';
    } else {
        let result = number - 7;
        if (result < 7) {
            return result;
        } else {
            return number * 2;
        }
    }
}

let output3 = isLGSeven(-15);
console.log(output3);


//Problem 4: Finding Bad data

/* This function will take an "Array of number" as input parameter. 
Then counts how many negative numbers (less than 0) in that array and returns the counted numbers. */

function findingBadData(numbersArray) {
    if (Array.isArray(numbersArray) === true) {
        let sum = 0;
        for (i = 0; i < numbersArray.length; i++) {
            const index = i;
            let element = numbersArray[index];
            if (element < 0) {
                sum = sum + 1;
            }
        }
        return sum;
    } else {
        return 'Please give an array of numbers as input';
    }
}
let output4 = findingBadData([2, -5, -7, -13]);
console.log(output4);


//Problem 5: Convert your gems into diamond

/* This function will take 3 number type input parameters of three friend's Gems. Multiply the first friend's Gem by 21, 
the second friend's Gem by 32, the third friend's Gem by 32 and Calculate the total diamonds number adding those 3 friends multiplication result together.
If total diamonds of them is more than double of 1000 then subtract 2000 from there and return the subtraction result. 
And if less than double of 1000 then will return total number of diamonds. */

function gemsToDiamond(firstFriendGems, secondFriendGems, thirdFriendGems) {
    if ((typeof firstFriendGems === 'number' && firstFriendGems >= 0) &&
        (typeof secondFriendGems === 'number' && secondFriendGems >= 0) &&
        (typeof thirdFriendGems === 'number' && thirdFriendGems >= 0)) {
        let totalDiamond = (firstFriendGems * 21) + (secondFriendGems * 32) + (thirdFriendGems * 43);
        if (totalDiamond > 1000 * 2) {
            return totalDiamond - 2000;
        } else {
            return totalDiamond;
        }
    } else {
        return "Please give 3 valid numbers as input and numbers must be positive number";
    }
}

let output5 = gemsToDiamond(20, 200, 50);
console.log(output5);

