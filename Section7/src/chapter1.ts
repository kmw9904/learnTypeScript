// 1.
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, 2);

// 2
function returnFristValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFristValue([0, 1, 2]);
let str = returnFristValue([1, "hello", "my name"]);


// 3
function getLength<T extends {length : number}>(data:T) {
    return data.length
}

let var1 = getLength([1, 2, 3]) // 3
let var2 = getLength("12345") // 5
let var3 = getLength({length:10}) // 10

// let var4 = getLength(10)
