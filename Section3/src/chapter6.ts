// 타입 단언

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = "김명원";
person.age = 345;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

let num1 = 10 as never;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name = // 프로퍼티 수정 불가

// Non Null 단언

type Post = {
  title: string;
  author: string;
};

let post: Post = {
  title: "게시글1",
  author: "김명원",
};

const len: number = post.author!.length;
