# union and intersection types

union type is a useful feature in typescript. it allows a variable to hold more than one type of value. sometimes we need to use different types of data in the same variable. union types help us do that easily. we use the `|` symbol to create a union type. for example:
let userId: string | number;
userId = 10;
userId = "user10";
here userId can store either a number or a string, but it cannot store a boolean value because we did not include boolean in the type.
we can also use union types in a function.
function showValue(value: string | number): void {
console.log(value);}
showValue(20);
showValue("Hello");
here the function can accept both number and string values.
on the other hand, intersection type combines multiple types into one type. we use the `&` symbol to create an intersection type. for example:
type User = {
name: string;};
type Account = {
email: string;};
type UserAccount = User & Account;
const user: UserAccount = {
name: "Alice",
email: "alice@example.com"};
here UserAccount needs both name and email properties because intersection combines the two types.we can use union when a value can have different possible types, and intersection when an object needs to contain properties from multiple types. both features make our code more flexible and easier to understand.
