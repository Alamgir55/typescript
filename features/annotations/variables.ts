let apples: number = 4;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();
let color: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [4,6,3];
let truths: boolean[] = [true, true, false]


class Car {

}

let car: Car = new Car();


let pointer: {x: number; y: number} = {
  x: 10,
  y: 20
}

const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

const json = '{"x": 10, "y": 20}';

const coordinates: {x: number; y: number} = JSON.parse(json);

console.log(coordinates);

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
  if(words[i] === 'green'){
    foundWord = true;
  }
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for(let i = 0; i < numbers.length; i++){
  if(numbers[i] > 0){
    numberAboveZero = numbers[i]
  }
}
