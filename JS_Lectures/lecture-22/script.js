// Array.prototype.at()

// at(index)

// {
//   let arr = [1,2,3,4,5,6,7,8,9]
//   let result = arr.at(5)
//   console.log(result);
// }

// Array.prototype.copyWithin()

// copyWithin(target, start)
// copyWithin(target, start, end)

{
  // let arr = ['🍕','🍔','🍟','🌭','🍿','🧀','🍩','🎂','🍰','☕','🌮','🍜','🍽','🧂']
  // console.log(arr);
  // let result = arr.copyWithin(3)
  // console.log(result);
  // let result = arr.copyWithin(3 , 7)
  // console.log(result);
  // let result = arr.copyWithin(3 , 5 , 8)
  // console.log(result);
}

// Array.prototype.entries()

{
  let arr = ['🍕','🍔','🍟','🌭','🍿','🧀','🍩','🎂','🍰','☕','🌮','🍜','🍽','🧂']
  let result = arr.entries()
  console.log(result);
  
}

// Array.prototype.every()

{

  const data = (item) => item < 50

  const array1 = [1, 30, 39, 29, 10, 13 , 56];

  console.log(array1.every(data));

}

// Array.prototype.fill()

// fill(value)
// fill(value, start)
// fill(value, start, end)

{
  const array = [1, 2, 3, 4];
  console.log(array);
}

// Array.prototype.filter()

{
  const words = ["spray", "elite", "exuberant", "destruction", "present"];

  const profiles = [
    {
      name: "rohit",
      age: 12,
    },
    {
      name: "ronak",
      age: 20,
    },
    {
      name: "roshan",
      age: 45,
    },
    {
      name: "romil",
      age: 30,
    },
    {
      name: "rohan",
      age: 23,
    },
    {
      name: "roman",
      age: 12,
    },
  ];

  // const result = words.filter(w => w.length > 5 && w.length < 8 )

  let result = profiles.filter((age) => age.age == 12).map((name) => name.name);

  console.log(result);
}
