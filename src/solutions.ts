// console.log("Hello");
// ! Problem Solving 1
export const multiplyValue = (value : number, multiplier? : number) : number => {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
};

//! Problem Solving 2
export const processInput = (
  value: string | number | boolean
): string | number => {
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
    else{
      return "Inactive";
    }
  }

  return value;
};

//! Problem 3 

export const formatCoordinate = (
  coordinate: readonly [number, number, string]
): string => {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
};


//TODO Prblem 4
export const concatenateArrays = <T>(
  ...arrays: T[][]
): T[] => {
  const result: T[] = [];

  for (const array of arrays) {
    result.push(...array);
  }

  return result;
};

//? Problem 5

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

export const getPopularCourses = (
  courses: Course[],
  minStudents: number
): Course[] => {
  return courses.filter((course) => {
    return course.isPublished === true &&
      course.students >= minStudents;
  });
};

//* problem 6
export const pluckValues = <T, K extends keyof T>(
  items: T[],
  key: K
): T[K][] => {
  return items.map((item) => item[key]);
};

// ! Problem 7 
export class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee Name: ${this.name}, Salary: ${this.baseSalary}`;
  }
}

export class Manager extends Employee {
  private department: string;

  constructor(
    name: string,
    baseSalary: number,
    department: string
  ) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager Name: ${this.name}, Department: ${this.department}`;
  }
}

// ! Problem 8 
export const validateAgeAsync = (
  age: number
): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};