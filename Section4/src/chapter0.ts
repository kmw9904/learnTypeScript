// 함수 타입 정의

// 함수를 설명
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수의 타입을 정의
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
function introduce(name = "김명원", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall : ${tall + 10}`);
  }
}

introduce("김명원", 175);
introduce("김명원", 20);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));
}
