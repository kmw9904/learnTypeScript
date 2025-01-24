// object
let user1: object = {
  id: 1,
  name: "이정환",
};

// user.id // 점 표기법은 오류가 발생합니다.

let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user2.id; // 점 표기법의 오류가 발생하지 않음음

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

let user3: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "김명원",
};

user3 = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "My API KEY",
};

// config.apiKey = "내맘대로 바꿔야지"