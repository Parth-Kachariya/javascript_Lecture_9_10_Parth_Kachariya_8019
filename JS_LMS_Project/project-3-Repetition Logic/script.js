let subjects = ["Maths", "Science", "English", "Gujarati", "Computer"];
let marks = [];
let studentDetails = {
  name: "vijay",
  class: "10th",
  rollNo: 30,
};

// ---------- User Input for Marks ----------
for (let i = 0; i < subjects.length; i++) {
  let input = parseInt(prompt(`Enter marks for ${subjects[i]} (Out of 100):`));
  marks.push(input);
}

// ----------Total & Average Marks ----------
console.log("---- Total & Average Marks ----");
let total = 0;
for (let i = 0; i < marks.length; i++) {
  total += marks[i];
}
let average = total / marks.length;
console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${average}`);

// ---------- Fail Subjects Count ----------
console.log("\n---- Fail Subjects Count ----");
let i = 0;
let failCount = 0;
while (i < marks.length) {
  if (marks[i] < 35) {
    failCount++;
  }
  i++;
}
console.log(`Total Fail Subjects: ${failCount}`);

// ---------- Ask User to Print Result ----------
console.log("\n---- Result Printing----");
let printResult;
do {
  printResult = prompt(
    "Do you want to print the result? (yes/no)"
  ).toLowerCase();

  if (printResult === "yes") {
    // ----------Details + Subjects & Marks ----------
    console.log("\n---- Student Result ----");
    console.log("Student Details:");
    for (let key in studentDetails) {
      console.log(`${key}: ${studentDetails[key]}`);
    }

    console.log("\nSubjects & Marks:");
    for (let [index, subject] of subjects.entries()) {
      console.log(`${subject}: ${marks[index]}`);
    }

    // ---------- Pass/Fail ----------
    console.log("\nFinal Result:");
    if (failCount > 0) {
      console.log("Result: FAIL ");
    } else {
      console.log("Result: PASS");
    }
  } else if (printResult === "no") {
    console.log("Result printing skipped ");
  } else {
    console.log("Invalid input! Please type 'yes' or 'no'.");
  }
} while (printResult !== "yes" && printResult !== "no");
