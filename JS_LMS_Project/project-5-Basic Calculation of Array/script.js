// Basic Calculation of Array
{
  console.log("\n============================\n");
  let size = parseInt(prompt("Enter the size of the array:"));
  let arr = [];

  for (let i = 0; i < size; i++) {
    let value = prompt(`Enter value for element ${i + 1}:`);
    arr.push(parseFloat(value));
  }
  console.log("The array is:", arr);

  //Sum function
  function Sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  // Average function
  function avg(arr) {
    let avg = Sum(arr) / arr.length;
    return avg;
  }
  // max function
  function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  // min function
  let min = (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  };

  // even number function
  function even(arr) {
    console.log("The even number of the array elements is:");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        console.log(arr[i]);
      }
    }
  }
  // odd number function
  function odd(arr) {
    console.log("The odd number of the array elements is:");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  }

  let choice = parseFloat(
    prompt(
      "\nChoose an operation:\n1. Sum\n2. Average\n3. max\n4. min\n5. even\n6.odd\nEnter your choice (1/2/3/4/5/6):"
    )
  );
  switch (choice) {
    case 1:
      console.log("The sum of the array elements is:", Sum(arr));
      break;
    case 2:
      console.log("The average of the array elements is:", avg(arr));
      break;
    case 3:
      console.log("The max of the array elements is:", max(arr));
      break;
    case 4:
      console.log("The min of the array elements is:", min(arr));
      break;
    case 5:
      even(arr);
      break;
    case 6:
      odd(arr);
      break;
    default:
      console.log("Invalid choice! Please select a valid operation.");
      break;
  }
}
