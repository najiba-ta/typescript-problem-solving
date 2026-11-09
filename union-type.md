<!-- ! Union Type ! -->

union type is useful feature in Typescript .it allows a variable hold more then one type of value .. sometimes we need to different types of data in the same variable.. union types help us dp that easily.we use thae | symbol to create the union type . its mean a variable can accept diffrent type of value. for example:  
let userId: string | number;
userId = 10;
userId = "user10";
here user id can store either number or string,, but it cannot store boolean value cz we didnt include boolean in the type.
we can also union type in a function .
function showValue(value: string | number): void {
console.log(value);}
showValue(20);
showValue("Hello");
here the function can accept both number and string values. we do not need to create two different functions for them.another example of union type is when we work with user information. sometimes a user name can be a string and a user age can be a number. we can use union type when one variable needs to accept these different types of values. it helps us write simple and flexible code.union Type is very helpful when we work with different types of data. It also makes our code more flexible and easy to understand. I think it is a useful feature for TypeScript beginners. it also helps developers understand what type of value a variable can accept. this makes the code easier to manage and helps avoid some common mistakes.