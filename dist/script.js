import { multiplyValue } from "./solutions.js";
import { processInput } from "./solutions.js";
import { formatCoordinate } from "./solutions.js";
import { concatenateArrays } from "./solutions.js";
import { getPopularCourses } from "./solutions.js";
import { pluckValues } from "./solutions.js";
import { Employee, Manager } from "./solutions.js";
import { validateAgeAsync } from "./solutions.js";
validateAgeAsync(20)
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error.message);
});
validateAgeAsync(16)
    .then((result) => {
    console.log(result);
})
    .catch((error) => {
    console.log(error.message);
});
const employee = new Employee("Rahim", 30000);
console.log(employee.getDetails());
const manager = new Manager("Karim", 50000, "IT");
console.log(manager.getRoleInfo());
const courses = [
    {
        title: "TypeScript",
        students: 120,
        isPublished: true
    },
    {
        title: "JavaScript",
        students: 80,
        isPublished: true
    },
    {
        title: "Python",
        students: 150,
        isPublished: false
    },
    {
        title: "React",
        students: 100,
        isPublished: true
    }
];
const students = [
    { name: "Rahim", age: 20 },
    { name: "Karim", age: 22 },
    { name: "Nabil", age: 21 }
];
console.log(pluckValues(students, "name"));
console.log(pluckValues(students, "age"));
console.log(getPopularCourses(courses, 100));
console.log(getPopularCourses(courses, 100));
console.log(concatenateArrays([1, 2], [3, 4]));
console.log(concatenateArrays(["Hello"], ["World"]));
console.log(formatCoordinate([23.8103, 90.4125, "Dhaka"]));
console.log(processInput("  HELLO WORLD  "));
console.log(processInput(5));
console.log(processInput(true));
console.log(processInput(false));
console.log(multiplyValue(5, 3));
console.log(multiplyValue(5));
