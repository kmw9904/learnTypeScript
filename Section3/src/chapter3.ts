// 객체 타입간의 호환성

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "김명원",
  color: "yello",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

// 슈퍼타입

// 서브타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};

// 서브타입인 programmingBook을 슈퍼타입인 book에 업 캐스팅
book = programmingBook;


type Book = {
    name: string;
    price: number;
  };

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
//   skill: "react.js", // 오류류
};

let book3:Book = programmingBook
