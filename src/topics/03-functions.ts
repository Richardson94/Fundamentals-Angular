function addNumbers(a: number, b: number) {
  return a + b;
}

const addNubmersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

const result: number = addNumbers(1, 2);
const result2: string = addNubmersArrow(1, 2);

console.log({ result, result2 });

export {};
