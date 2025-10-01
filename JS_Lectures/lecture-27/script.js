// in json

{

    console.log("===================");
    console.log("json to object");
    // Ye JSON string ko  object/array me convert kar deta hai.
    let  profile = '{"name": "rahul patel","age": 30, "city": "New York", "gender":"male"}';
    console.log(profile);

    let jsonData = JSON.parse(profile);
    console.log(jsonData);
}
// in object 
{
// Ye object ya array ko ek JSON string me convert kar deta hai.
console.log("===================");
console.log("object to json");



    let  profile = {
        "name": "rahul patel" ,
        "age": 30 ,
        "city": "New York"  ,
        "gender":"male"
        };
    console.log(profile);

    let jsonData = JSON.stringify(profile);
    console.log(jsonData);
}