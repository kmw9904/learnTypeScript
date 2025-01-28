// 인터페이스

interface Person {
  name: string;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

type Type1 = number | string
type Type2 = number & string

const person: Person = {
  name: "김명원",
  sayHi: () => {
    console.log("hello");
  },
};

person.sayHi();
person.sayHi(1, 2);
