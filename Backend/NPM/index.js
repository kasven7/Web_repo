import { randomSuperhero } from "superheroes";
import generateName from "sillyname";

var sillyName = generateName();
var superName = randomSuperhero();

console.log("My superhero name is " + superName + "!");
console.log("My silly name is " + sillyName + "!");
