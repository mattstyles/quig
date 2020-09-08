
export class MyClass {
  constructor (str) {
    this.str = str
  }

  say (pre) {
    console.log(`${pre}${this.str}`)
  }
}
