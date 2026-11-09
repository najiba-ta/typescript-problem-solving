# union and intersection types

union type is a useful feature in typescript. it allows a variable to hold more than one type of value. sometimes we need to use different types of data in the same variable. union types help us do that easily. we use the `|` symbol to create a union type. it means a variable can accept different types of values. for example:
let userId: string | number;
userId = 10;
userId = "user10";
here userId can store either a number or a string, but it cannot store a boolean value because we did not include boolean in the type.
we can also use union types in a function.
function showValue(value: string | number): void {
  console.log(value);}
showValue(20);
showValue("Hello");
here the function can accept both number and string values. we do not need to create two different functions for them.on the other hand, intersection type is another useful feature in typescript. it combines multiple types into one type. we use the `&`symbol to create an intersection type. for example:
type User = {
  name: string;
};
type Account = {
  email: string;
};
type UserAccount = User & Account;
const user: UserAccount = {
  name: "Alice",
  email: "alice@example.com"
};
here UserAccount needs both name and email properties because intersection combines the two types.we can use union and intersection together when working with different kinds of data. union allows different possible types, while intersection combines the required properties of multiple types.both union and intersection types make our code more flexible and easier to understand. i think they are very useful features for typescript beginners.