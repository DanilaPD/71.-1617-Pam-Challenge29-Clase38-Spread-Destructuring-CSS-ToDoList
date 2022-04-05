//! Destructuring:

//* 1

//? Destructurando un "array":
// Les doy un "valor" a los diferentes elementos del "array" y después, los llamo:

const nums = ["uno", "dos", "tres"];
const [one, two, three] = nums;

const one5 = nums[0];
const two5 = nums[1];
const three5 = nums[2];

console.log(three);
console.log(three5);

//* 2

//? Destructurando un "objeto":

const object = {
    name: "Cindy",
    legs: 4,
    tricks: ["she can jump", "she can catch the ball", "she likes taking naps"],
    walking: function () {
        console.log("she likes going for a walk");
    }
};

const {
    name,
    legs,
    tricks,
    walking,
} = object;

console.log(tricks[0]);

// Llamando a la función sin acceder al "objeto":
walking();