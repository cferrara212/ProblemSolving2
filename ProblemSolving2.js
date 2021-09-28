"use strict"


// //////
// ////// Problem Solving Worksheet 2
// //////



// //////
// ////// b.A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1. An example of a happy number is 19
// //////c.Write a method that determines if a number is happy or sad
// //////


//             //////
//             ////// The first step to solve this problem is to separate all of the numbers in an integer
//             //////
                        
//                         let number = 19;
//                         let splitNumber= separateNumbers(number);

//                         // console logs to test functionality in different instances.
//                         console.log(splitNumber);
//                         console.log (separateNumbers(234));

                        
//             //////The number its self cannot be split, so we are going to turn the numebr into a string, split the string into pieces, putting them in an array, and then parse the array pieces back into numbers.
//             //////
//             ////// In this instance I will use the .map function instead of a for loop for simplicity and cleanliness. It will act the same as a for loop, iterating over the array and turning each portion of the
//             ////// of the array into a number and sending that number back to where the function was called. 
//             //////
//             ////// I will also be using the Number constructor in order to turn the string back into a number....thanks javascript, your so nice!

//                         function separateNumbers(numberToSeparate)
//                         {
//                             return (numberToSeparate + '').split('').map((i) => {return Number(i); });
//                         }

//             //////
//             ////// The second step is to find what the result of each number in that integer is when squared
//             //////
//                         let splitNumbersSquared= squareNumbers(splitNumber);

//             //////  console logging function to ensure stability
//             /////
//                         console.log(squareNumbers(splitNumber));
//                         function squareNumbers(numbersToSquare)
//                         {
//                             return splitNumber.map(function(i) {return i * i});
//                         }

// ///// I could separate numbers and square them in one .map function, however for the sake of functions doing one task and visual clarity I did not. 


//             //////
//             ////// The third step is to add the sum of the squared numbers
//             //////


//             //////
//             ////// I used the .reduce function in place of a for loop. a is my accumulator variable, and b is the current position of the array. a+b just adds my current position to my accumulated sum
//             ////// .reduce is just walking through each component in my aray and adding at position i. the same af for (i in b) with a as the sum being added to.


//                        let sum= splitNumbersSquared.reduce((a,b)=> a+b,0);
                       
                      
//             //////
//             ////// The fourth setp is to repeat this untill a single digit is reached
//             //////
//             ////// For this portion I am going to condense all of my setps into one loop function that has a counter to prevent looping forever. If the number is not happy within 20 tries then it
//             ////// will be considered to not be a happy number.

//             ////// I have also decided to condence splitting the numbers and squaring them into one line of code.

            let myHappyNumber= isHappyNumber(19);
            console.log(myHappyNumber);

                    function isHappyNumber (numberToCheck,counter=0)
                    {
                        
                        let isHappy=false;
                          if(counter<20)
                          {
                              let numbersSquared= numberToCheck.toString().split('').map(i => i*i);
                              let numbersAdded= numbersSquared.reduce((a,b) => a+b,0);
                               if ( numbersAdded === 1)
                               {
                                   
                                   isHappy=true
                                   return;
                               }
                               else
                               {
                                   counter ++;
                                   isHappyNumber(numbersAdded,counter);
                                   
                               }
                               
                          }
                          return isHappy;
                    }
            //////
            //////

//////
////// 2.Prime Numbers
//////a.A prime number is a number that is only divisible by one and itself.
//////b.Write a method that prints out all prime numbers between 1 and 100 




//////

let primes= allPrimesInRange(0,100);
                  function allPrimesInRange(min,max)
                  {
                      for (let i= min; i<=max; i++)
                      {
                          let isPrime= true;
                          
                          for(let j=2; j<=i;j++)
                           {
                               if(i%j===0 && j!== i)
                                {
                                    isPrime=false;
                                }
                                
                           }

                         if (isPrime === true)
                         {
                             console.log(i);
                         }  
                      }
                  }



//////
//////3.Fibonacci
//////a.A series of numbers in which each number (Fibonacci number) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.
//////b.Write a method that does the Fibonacci sequence starting at 1
//////c.HARDER VERSION: Write a method that does the Fibonacci sequence starting at a number that a user inputs


let fib = [];

fib[0] = 0;
fib[1] = 1;
for (let i = 2; i <= 10; i++)
 {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
