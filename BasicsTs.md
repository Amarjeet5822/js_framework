# Variables & Types
1. Variables & Types (let/const same hai, bas type likhna hota hai )
## JavaScript:
```js
let name = "Amar";
```

## TypeScript:
```ts
let name:string = "Amar";
let age:number = 20;
let isStudent:boolean = true;
```
2. Functions with tpyes

```js
function greet(name) {
  return "Hello" + name
}
```
TypeScript:
```ts
function greet(name:string):string{
  return "Hello" + name
}
// name:string --input type
// :string -- output type
```
## Arrays & Objects

```ts
let fruits: string[] = ["apple", "banana"];
let scores: number[] = [ 100, 99];
// Object types:
let user: { name:string; age:number} = {name: "Amar", age: 24}
```

Optional property:
let user: {name:string, age?:number}

4. Interfaces & Types -- for resuable object structures
```ts
interface User { name: string; age:number;}
let u: User = { name:"Ram", age:24 };

```
5. Union Types -- agar multiple types allow karne ho
```ts
let value: string | number = "hello";
value = 42; // allowed
```
6. Classes ( Adonis uses a lot of them)
```ts
class Animal {
  name:string;
  constructor(name:string) {
    this.name;
  }
  speak() : string {
    return `${this.name} says hello`;
  }
}
```
7. Enums (fixed set of values)

