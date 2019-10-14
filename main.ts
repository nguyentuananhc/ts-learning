function greeter(person: string) {
    const sayHi = `Hello ${person}`
    console.log(sayHi)
}

greeter('tuan anh')

// type of ts

let a: string;
let b: number;
let c: boolean;
let d: string[] = ['a', 'b', 'c']; // boolean[], number[]
let e: any; // default type of variable
let f: null;
let g: undefined;
let h: void; // funcion method

enum Color {
    Red = 'red',
    Green = 'green',
    Yellow = 'yellow',
}

// example for enum
let red = Color.Red