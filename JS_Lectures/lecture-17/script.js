// Javascript Map.Object() Method

{
  let map = new Map();

  map.set("language1", "HTML");

  map.set("language2", "CSS");

  map.set("language3", "JAVASCRIPT");

  map.set("language4", "REACT JS");

  map.set("language5", "BOOTSTRAP");

  map.set("language6", "TAILWIND");

  let result = map.has("language"); // available in map if yes = true else false

  // map.delete("order2")

  // map.clear()  clear all key and value

  let get = map.get("language1");
  let get2 = map.get("language2");
  let get3 = map.get("language3");
  let get4 = map.get("language4");
  let get5 = map.get("language5");
  let get6 = map.get("language6");

  let iteration = map.keys();

  console.log(map);

  console.log(map.size);

  console.log(result);

  console.log(get);
  console.log(get2);
  console.log(get3);
  console.log(get4);
  console.log(get5);
  console.log(get6);

  let entries = map.entries();

  let values = map.values();

  console.log(iteration.next().value);
  console.log(iteration.next().value);
  console.log(iteration.next().value);
  console.log(iteration.next().value);
  console.log(iteration.next().value);
  console.log(iteration.next().value);

  console.log(entries.next().value);
  console.log(entries.next().value);
  console.log(entries.next().value);
  console.log(entries.next().value);
  console.log(entries.next().value);
  console.log(entries.next().value);

  console.log(values.next().value);
  console.log(values.next().value);
  console.log(values.next().value);
  console.log(values.next().value);
  console.log(values.next().value);
  console.log(values.next().value);

  console.log(map);


  // {
  //   | Method                | Use
  //   | `"set(key, value)"    | Map me value add/update karne ke liye `
  //   | `"get(key)"           | Kisi key ka value lene ke liye      `
  //   | `"has(key)"           | Check karna ki key hai ya nahi          `
  //   | `"delete(key)"        | Specific key ko delete karne ke liye   `
  //   | `"clear()"            | Pura Map empty karne ke liye      `
  //   |`" size "              | Map me kitne elements hai ye check karne ke liye`

  // }

  {
    
let newmap = new Map();

// Values add karna
newmap.set("name", "Parth");
newmap.set("age", 25);
newmap.set("city", "Surat");

// Value lena
console.log(newmap.get("name"));   

// Key exist check karna
console.log(newmap.has("age"));    

// Size check karna
console.log(newmap.size);         

// Key delete karna
// newmap.delete("city");

// newmap.clear();  // Pure map ko clear karna

// console.log(map);
for (let [key, value] of newmap) {
  console.log(key + ": " + value);
}

  }
}
