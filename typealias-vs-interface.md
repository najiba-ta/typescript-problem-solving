<!-- ! type alias vs interface ! -->

# type alias vs interface in typescript
type alias and interface are two useful features in typescript. both are used to define the structure of data. they help developers write clean and reusable code. but they have some differences.
we use the `type` keyword to create a type alias. it can define different types of values, such as string, number, union, tuple and object. for example:
type UserId = string | number;
type User = {
name: string;
age: number;};
here UserId can accept either a string or a number. User defines an object with name and age properties.
on the other hand, we use the `interface` keyword mainly to define the structure of an object. for example:
interface Product {
name: string;
price: number;}
an interface can also be extended using the `extends` keyword.
interface Book extends Product {
author: string;}
one important difference is that interfaces support declaration merging, but type aliases do not. we can also use type aliases for union and intersection types, which makes them more flexible.both are useful in typescript. i usually prefer interface when defining object structures and type when working with unions or other complex types. choosing the right one helps make code easier to understand and maintain.
