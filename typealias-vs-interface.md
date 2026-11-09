<!-- ! type alias vs interface ! -->

type alias and interface are two useful features in Typescript .both are used to define the structure of data .. sometimes we need to define what type of data a variable or object can hold.. type alias and interface help us do that easily.
we use the type keyword to create a type alias . for example:
type User = {
name: string;
age: number;};
let user: User = {
name: "Rahim",
age: 20};
here we create a type alias called User . it means the user object must have a name and an age.we can also use interface to define the structure of an object . for example:
interface Student {
name: string;
age: number;}
let student: Student = {
name: "Karim",
age: 22};
here the interface defines what properties a student object should have.type alias and interface look similar, but they have some differences . type alias can be used with union and intersection types . interface is mainly used to describe the structure of objects . interface can also be extended by another interface.both are very useful in Typescript . they help us write clean and organized code.. i think beginners should learn both because they are commonly used in Typescript projects.