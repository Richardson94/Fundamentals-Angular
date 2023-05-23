export class Person {
  //public name: string | undefined;
  //private address: string;

  constructor(
    public name: string | undefined,
    private address: string = 'No Address'
  ) {
    this.name = name;
    this.address = address;
  }
}

const ironman = new Person('Ironman');
console.log({ ironman });
