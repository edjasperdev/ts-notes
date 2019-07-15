const isOpen: boolean = false;
const myName: string = 'Ed';
const myAge: number = 30;
const list: number[] = [1, 2, 3];
const me: [string, number, boolean] = ['Ed', 32, false];
enum Job {
  SoftwareEngineer,
  Podcaster,
  PM
}
const job: Job = Job.SoftwareEngineer;

const phone: any = 'iPhone';

const lazy: any = 3;

//Functions in Typescript

const sayWord = (word?: string): string => {
  console.log(word);
  return word || 'Hello';
};

//default params
const sayDefaultWord = (word = 'Hello'): string => {
  console.log(word);
  return word;
};

sayDefaultWord();

//default params with spread operator
const sayDefaultSpreadWord = (
  word = 'Hello',
  ...otherWords: string[]
): string => {
  console.log(otherWords);
  return word;
};

sayDefaultSpreadWord('hey', 'cool');
