// console.log("Hello");
// ! Problem Solving 1
export const multiplyValue = (value, multiplier) => {
    if (multiplier === undefined) {
        return value * 2;
    }
    return value * multiplier;
};
//! Problem Solving 2
export const processInput = (value) => {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    if (typeof value === "boolean") {
        if (value === true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
    return value;
};
//! Problem 3 
export const formatCoordinate = (coordinate) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};
//TODO Prblem 4
export const concatenateArrays = (...arrays) => {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
};
export const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => {
        return course.isPublished === true &&
            course.students >= minStudents;
    });
};
//* problem 6
export const pluckValues = (items, key) => {
    return items.map((item) => item[key]);
};
// ! Problem 7 
export class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee Name: ${this.name}, Salary: ${this.baseSalary}`;
    }
}
export class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager Name: ${this.name}, Department: ${this.department}`;
    }
}
// ! Problem 8 
export const validateAgeAsync = (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
