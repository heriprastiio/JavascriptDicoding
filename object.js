const manusia = {
    firstname: "Adam",
    age: 1000,
    isMale: true,
    "hello world": "Hello",
    color: "White"
}

// manusia.color = "Red";
// console.log(`Nama saya ${manusia.firstname}`);
// console.log(`Hallo ${manusia["hello world"]}`);
delete manusia.color;
console.log(manusia)