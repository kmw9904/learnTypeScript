// enum 타입

enum Role {
  ADMIN,
  USER = 10,
  GUEST,
}

const user1 = {
  name: "김명원",
  role: Role.ADMIN, // 0이 할당
};
const user2 = {
  name: "김명투",
  role: Role.GUEST, // 1이 할당
};
const user3 = {
  name: "김명삼",
  role: Role.USER, // 2이 할당
};

console.log(user1, user2, user3);

enum Language {
  korean = "ko",
  english = "en",
}

const user4 = {
  name: "김명원",
  role: Language.korean, // 0이 할당
};
const user5 = {
  name: "김명투",
  role: Language.english, // 1이 할당
};
const user6 = {
  name: "김명삼",
  role: Language.english, // 2이 할당
};

console.log(user4, user5, user6);
