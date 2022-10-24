let person = {
  fname: "Schmuel",
  lname: "Daniel",
  age: 18,
  isMarried: false,
};

let arr = Object.values(person);

arr.forEach((item, index) => {
  if (typeof item === "string") {
    console.log(arr.toUpperCase());
  }
});
