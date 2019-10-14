function greeter(person: string) {
    const sayHi = `Hello ${person}`
    console.log(sayHi)
}

greeter('tuan anh')

// Type of ts

let a: string;
let b: number;
let c: boolean;
let d: string[] = ['a', 'b', 'c']; // boolean[], number[], any[]
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

//custom type ?


// TypeAsertion
let ta: string[];

// ta. show all avaible method in string[]

// Cast
let test = ['ta'];
// (<string[]>test) cast 1 
// (test as string[]) cast 2

// error 
// completion error show on VS code
// runtime error show after comple


// Interface

interface Food {
    x: string;
    y: string;
}

let eat = (food: Food) => {
    console.log(`eat ${food.x}, ${food.y}`)
}

let makeFood = (food: Food) => {

}


//Conhesion things related to each other should stay in same place ? => solution use Class

//Class

//Getter setter

class Foods {
    // access modifiers: public, private, protected
    // default access modifiers is public

    constructor(private _x: string, private _y: string) {
        this._x = _x
        this._y = _y
    }

    makeFood = () => {
        console.log(`make food ${this._x}, ${this._y}`)
    }

    get x() {
        return this._x
    }
    
    set x(value: string) {
        if (!value) {
            throw new Error('cannot set empty string value to this variable')
        }
        this._x = value
    }
    
}

let newfood = new Foods('rice', 'meat')
console.log(newfood.x)
newfood.x = 'raw meat'
console.log(newfood.x)
newfood.makeFood()