// 접근 제어자

class Employee {
  // 필드
  protected name: string;
  protected age: number;
  protected position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("김명원", 21, "developer");
// employee.name = "김명투";
// employee.age = 25;
// employee.position = "student";
