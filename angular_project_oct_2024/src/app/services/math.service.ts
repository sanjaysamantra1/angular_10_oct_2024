import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  add(a: number, b: number) {
    console.log(`Addition of ${a} & ${b} is ${a + b}`)
  }
  sub(a: number, b: number) {
    console.log(`Subtraction of ${a} & ${b} is ${a - b}`)
  }
  mul(a: number, b: number) {
    console.log(`Multiplication of ${a} & ${b} is ${a * b}`)
  }
}
