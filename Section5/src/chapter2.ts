// 선언 합침

interface Person {
  name: string;
}

interface Person {
//   name: number;
  age: number;
}

const person: Person = {
  name: "",
  age: 21,
};

// 모듈 보강