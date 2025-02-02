// keyof 연산자

type Person = typeof person

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "김명원",
  age: 21,
};

getPropertyKey(person, "name");
