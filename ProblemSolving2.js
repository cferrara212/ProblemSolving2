"use strict"


//////
////// Problem Solving Worksheet 2
//////



//////
////// b.A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
//////c.Write a method that determines if a number is happy or sad
//////


            //////
            ////// The first step to solve this problem is to separate all of the numbers in an integer
            //////
                        
                        let number = 19;
                        let splitNumber= separateNumbers(number);

                        // console logs to test functionality in different instances.
                        console.log(splitNumber);
                        console.log (separateNumbers(234));

                        
            //////The number its self cannot be split, so we are going to turn the numebr into a string, split the string into pieces, putting them in an array, and then parse the array pieces back into numbers.
            //////
            ////// In this instance I will use the .map function instead of a for loop for simplicity and cleanliness. It will act the same as a for loop, iterating over the array and turning each portion of the
            ////// of the array into a number and sending that number back to where the function was called. 
            //////
            ////// I will also be using the Number constructor in order to turn the string back into a number....thanks javascript, your so nice!

                        function separateNumbers(numberToSeparate)
                        {
                            return (numberToSeparate + '').split('').map((i) => {return Number(i); });
                        }

            //////
            ////// The second step is to find what the result of each number in that integer is when squared
            //////
                        let splitNumbersSquared= squareNumbers(splitNumber);

            //////  console logging function to ensure stability
            /////
                        console.log(squareNumbers(splitNumber));
                        function squareNumbers(numbersToSquare)
                        {
                            return splitNumber.map(function(i) {return i * i});
                        }
            //////
            ////// The third step is to add the sum of the squared numbers
            //////
                       for (let i=0; i<splitNumbersSquared.length; i++)
                       {
                           let added;
                           added= added + splitNumbersSquared[i];
                           
                       }
                       console.log(added);
            //////
            ////// The fourth setp is to repeat this untill a single digit is reached
            //////

            //////
            //////