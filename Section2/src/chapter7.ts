// void

function func1():string {
    return "Hello"
}

function func2(): undefined {
    console.log("hello")
    return undefined
}

let a:void

// never
function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error()
}