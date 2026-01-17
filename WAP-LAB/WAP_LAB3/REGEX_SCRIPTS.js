// scripts.js

// Matches exactly one lowercase letter from a-z (^ start, $ end, [a-z] any lowercase letter)
let regex1 = /^[a-z]$/;

console.log(regex1.test('g')); // true, g belongs to [a to z]
console.log(regex1.test('A')); // false, A doesn't belong to [a to z]

// Matches exactly one uppercase letter from A-Z
let regex2 = /^[A-Z]$/;
console.log(regex2.test('A')); // true, A belongs to [A to Z]

// Matches 'a' followed by exactly one character (.) then 'b' (dot wildcard matches any single character)
let regex3 = /a.b/;
console.log(regex3.test('ab'));   // false, nothing is between a and b
console.log(regex3.test('acb'));  // true, c comes in between a and b
console.log(regex3.test('accb')); // false, two characters between a and c

// Matches 'a' followed by zero or more characters (.* closure) then 'b' (zero characters also accepted)
let regex4 = /a.*b/;
console.log(regex4.test('ab'));        // true, because 0 number of character in between a and b is also accepted
console.log(regex4.test('ajlsdfjsdfb'));// true, any number of characters in between a and b is accepted


// Matches string containing zero or more lowercase letters only (^ start, $ end, [a-z]* zero or more lowercase)
let regex5 = /^[a-z]*$/;
console.log(regex5.test('abcdef')); // true, all letters are lowercase
console.log(regex5.test('abcAb'));  // false, A is uppercase

// Matches string containing one or more 'a' (+ quantifier means one or more)
let regex6 = /^a+$/;
// Matches string containing zero or more 'a' (* quantifier means zero or more)
let regex7 = /^a*$/;
console.log(regex6.test('a'));  // true, there is one a
console.log(regex6.test(''));   // false, there must be one a

// diff between quantifier and closure
console.log(regex7.test(''));   // true, because closure also contains 0

// Matches 'color' or 'colour' - 'u' is optional and appears at most once (? makes preceding character optional)
let regex8 = /colou?r$/;
console.log(regex8.test('color'));  // true, 'u' doesn't appear
console.log(regex8.test('colour')); // true, 'u' appears once
console.log(regex8.test('colouur'));// false, 'u' cannot appear twice

// look ahead
// let regex9 = /^(?=.*a)$/; // look ahead for at least one 'a'
// this gives failure because (?=) doesn't consume any space i.e
// /^(?=.*a)$/ is equivalent to /^$/ i.e doesn't consume any space

// Positive lookahead (?=.*a) checks if string contains at least one 'a', .+ consumes one or more characters
let regex9 = /^(?=.*a).+$/;

console.log(regex9.test('jskdflsfdadsfkl')); // true, contains one 'a'
console.log(regex9.test('sljkgfhklru'));     // false, doesn't contain 'a'


// Positive lookahead checks if string contains at least one lowercase letter [a-z]
let regex10 = /^(?=.*[a-z]).+$/;
console.log(regex10.test('ASDHDSDFDS')); // true, contains 's'
console.log(regex10.test('JHSDSFFD'));   // false, doesn't contain any lowercase


// Two positive lookaheads: first checks for lowercase [a-z], second checks for uppercase [A-Z]
let regex11 = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
console.log(regex11.test('A'));   // false, doesn't contain a lowercase
console.log(regex11.test('b'));   // false, doesn't contain an uppercase
console.log(regex11.test('Ab'));  // true, contains at least an uppercase and lowercase


// Lookahead with OR (|): checks if string contains at least one lowercase OR one uppercase letter
let regex12 = /^(?=.*[a-z]|.*[A-Z]).+$/;
console.log(regex12.test('A'));    // true, contains a lowercase
console.log(regex12.test('b'));    // true, contains an uppercase
console.log(regex12.test('Ab'));   // true, contains an uppercase and lowercase
console.log(regex12.test('123'));  // false, doesn't contain an uppercase and lowercase


// Matches string with minimum 8 characters (. any character, {8,} exactly 8 or more)
let regex13 = /^.{8,}$/;
console.log(regex13.test('abcdefgh'));   // true, string is 8 characters long
console.log(regex13.test('abcdefghijk'));// true, string is > 8 characters long
console.log(regex13.test('abcde'));      // false, string is < 8 characters long


// Lookahead checks if string contains at least one special symbol/character (not alphanumeric [^a-zA-Z0-9])
let regex14 = /^(?=.*[^a-zA-Z0-9]).+$/;
console.log(regex14.test('ajc'));     // false, no symbols
console.log(regex14.test('sldf$lksd'));// true, contains $


// Four positive lookaheads: lowercase [a-z], uppercase [A-Z], special symbol [^a-zA-Z0-9], digit [0-9] AND minimum 8 characters
let regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[0-9]).{8,}$/;
console.log(regex_password.test('aB$12'));     // false, not 8 characters long
console.log(regex_password.test('Hcoe@1234_'));// true