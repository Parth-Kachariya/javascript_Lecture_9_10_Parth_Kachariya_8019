// in json

{
  console.log("===================");
  console.log("json to object");
  // Ye JSON string ko  object/array me convert kar deta hai.
  let profile =
    '{"name": "rahul patel","age": 30, "city": "New York", "gender":"male"}';
  console.log(profile);

  let jsonData = JSON.parse(profile);
  console.log(jsonData);
}
// in object
{
  // Ye object ya array ko ek JSON string me convert kar deta hai.
  console.log("===================");
  console.log("object to json");

  let profile = {
    name: "rahul patel",
    age: 30,
    city: "New York",
    gender: "male",
  };
  console.log(profile);

  let jsonData = JSON.stringify(profile);
  console.log(jsonData);
}

console.log("===================");

{
  // Object Method In Javascript
  let profile1 = { name: "Rakesh", age: 20, gender: "male" };
  let profile2 = { names: "Ramesh", ages: 21, genders: "male" };
  let profile3 = { NAMES: "rahul", AGES: 22, GENDERS: "male" };

  // Object.assign()

  // Object.assign(target);
  // Object.assign(target, source1);
  // Object.assign(target, source1, source2);
  // Object.assign(target, source1, source2, /* …, */ sourceN);

  let result = Object.assign(profile2);
  let result1 = Object.assign(profile2, profile1);
  let result2 = Object.assign(profile2, profile1, profile3);

  console.log(result);
  console.log("===================");
  console.log(result1);
  console.log("===================");
  console.log(result2);
  console.log("===================");

    // console.log(profile1);
    // console.log(profile2);
    // console.log(profile3);
  //   console.log(result === profile2);
}
{
  // Object.create()

  // Object.create(proto);
  // Object.create(proto, propertiesObject);

  let profile1 = { name: "Rakesh", age: 20, gender: "male" };

  let result = Object.create(profile1);

  console.log(result);

  console.log(result.name);
}
