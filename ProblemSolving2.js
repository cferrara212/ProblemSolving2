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
                        let separatedNumber= separateNumbers(number);
                        console.log(separatedNumber);
                        
                        function separateNumbers(numberToSeparate)
                        {
                            let numbersSeparated=[];
                            for(let i=0; i<numberToSeparate.length; i++)
                            {
                                numbersSeparated.push(numberToSeparate[i]);
                            }
                            return numbersSeparated;
                        }

            //////
            ////// The second step is to find what the result of each number in that integer is when squared
            //////

            //////
            ////// The third step is to add the sum of the squared numbers
            //////

            //////
            ////// The fourth setp is to repeat this untill a single digit is reached
            //////

            //////
            //////