// 클래스

let studentA = {
  name: "김명원",
  grade: "C+",
  age: 21,
  study() {
    console.log("열심히 공부 안함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 안함");
  }
  introduce() {
    console.log("안녕하세요!");
  }
}

class StudentDevelpoer extends Student {
  // 필드
  favoriteSkill;

  // 생성자자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDevelpoer = new StudentDevelpoer("김명삼", "B-", 21, "Typescript");

let studentB = new Student("김명투", "A-", 21);
console.log(studentB);
