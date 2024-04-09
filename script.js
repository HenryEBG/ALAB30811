//Exercise 1  

// variables declaration
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

/**
 * we have 4 numbers to sum 50
 * two number has to be odd
 * number has to be larger of 25
 * number has to be unique
 */


/**
 * Exercise resolving using example before
 */


/**
 * First Condition
 * All numbers are visible by 5
 * We apply module 5 and if all are 0
 * return true
 */
const allfive = (n1%5+n2%5+n3%5+n4%5)==0
console.log(allfive)
/**
 * Second condition
 * Check if first number is larger than the last
 * We compare num1 to num4 and se if num1 is larger
 * than num4 if that return true
 */
const firstlargelast = n1>n4
console.log(firstlargelast)

/**
 * Third implemantation
 *  substract
 *  multiply
 *  find remainder
 */
const secondminusfirst = n2-n1
const multiplythird = secondminusfirst*n3
const remainderbyfour = multiplythird%n4
console.log(`minus result ${secondminusfirst} multiplyresult ${multiplythird} remainder result ${remainderbyfour}`)

/**
 * Another way to do the conditions
 * All variables can't be larger than 25
 */

const under25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25
console.log(`verifying all numbers under 25 ${under25}`)