 // unknown

 function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello"
    let c: unknown = true
    let d: unknown = null
    let e: unknown = undefined

    // let unknownVar: unknown

    // let num: number = unknownVar // x
    // let str: string = unknownVar // x
    // let bool: boolean = unknownVar // x
 }

//  never 타입

function neverExam() {
    function neverFunc():never {
        while (true) {}
    }

    let num: number = neverFunc()
    let str: string = neverFunc()
    let bool: boolean = neverFunc()

    // let never1: never = 10 // x
    // let never2: never = "string" // x 
    // let never3: never = true // x
}

// void

function voidExam() {
    function voidExam(): void {
        console.log("hi")
    }

    let voidVar: void = undefined
}

// any
function anyExam() {
    let unknownVar: unknown
    let anyVar: any
    let undefinedVar: undefined
    let neverVar: never

    anyVar = unknownVar

    undefinedVar = anyVar

    // neverVar = anyVar // x
}