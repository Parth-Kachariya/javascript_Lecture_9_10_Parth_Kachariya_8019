// Conditional Statements
{
  let choice = parseInt(prompt("Enter Your Choice"));
  let password = 123456;
  let balance = 100000;
  console.log("=============================================\n");
  console.log("------Balance Check------");
  console.log("------Money Withdraw------");
  console.log("------Money  deposit------");
  console.log("------Account Check (Block / Active)------");
  console.log("------Set/Change ATM PIN------");
  console.log("------Delete Account------");
  console.log("=============================================\n");

  switch (choice) {
    // Balance Check
    case 1:
      console.log("Balance Check CASE");

      let pin = parseInt(prompt("Enter your Password"));
      if (pin === password) {
        console.log("Your Current Balance is: ₹", balance);
      } else {
        console.log("Invalid Password!! please Enter Your Correct Password");
      }
      console.log("=============================================\n");

      break;
    // Money Withdraw
    case 2:
      console.log("Money Withdraw CASE");

      {
        let pin = parseInt(prompt("Enter your Password"));
        if (pin === password) {
          let amount = parseFloat(prompt("Enter amount For withdraw:"));
          if (amount <= balance) {
            balance -= amount;
            console.log("Withdrawal Successful. Remaining Balance: ₹", balance);
          } else {
            console.log(
              "You Have Entered an Amount Greater Than Your Balance!!"
            );
          }
        } else {
          console.log("Invalid Password!! please Enter Your Correct Password");
        }
        console.log("=============================================\n");
      }
      break;
    // Money  deposit
    case 3:
      console.log("Money  deposit CASE");

      {
        let pin = parseInt(prompt("Enter your Password"));
        if (pin === password) {
          let deposit = parseFloat(prompt("Enter amount For deposit:"));
          console.log("Your Current Balance is: ₹", balance);

          if (100 <= deposit) {
            balance += deposit;
            console.log(
              " Money  deposit  Successful. deposit added Balance: ₹",
              balance
            );
          } else {
            console.log("You Have Entered an Amount Less Than ₹100!!");
          }
        } else {
          console.log("Invalid Password!! please Enter Your Correct Password");
        }
        console.log("=============================================\n");
      }
      break;
    // Account Check (Block / Active)
    case 4:
      console.log("Account Check (Block / Active) CASE");

      {
        let pin = parseInt(prompt("Enter your Password"));
        if (pin === password) {
          let livebalance=parseInt(prompt("Enter your live balance"));
          if (2000 <= livebalance) {
            console.log("Your Account Is Active");
          } else if (1000 <= livebalance) {
            console.log("!! increase your balance....\n");
            console.log(
              "if you don't increase your Balance, Your Account May be Blocked 15 days."
            );
          } else {
            console.log("!! Account Is Blocked !!\n");
            console.log("!!please Activate your bank account. !!\n");
            console.log("!! Please deposit money. !!\n");
          }
        } else {
          console.log(
            "Invalid Password!! please Enter Your Correct Password\n"
          );
        }
      }
      break;
    //  Set/Change ATM PIN
    case 5:
      console.log("Set/Change ATM PIN CASE");

      let oldpassword = parseInt(prompt("Enter Your Old password:"));
      if (password === oldpassword) {
        let newpassword = parseInt(prompt("Enter Your New password:"));
        password = newpassword;
        console.log("Your Password is Changed Successfully\n");
      } else {
        console.log("Incorrect old PIN! Cannot change.!!\n");
      }
      break;
    // Delete Account
    case 6:
      console.log("Delete Account CASE");

      {
        let pin = parseInt(prompt("Enter your Password"));
        if (pin === password) {
          let Currentbalance = parseFloat(prompt("Enter Your Balance:"));
          if (Currentbalance === 0) {
            console.log("Your Account Closed Successfully!\n");
          } else {
            console.log(
              "Account cannot be closed. Please withdraw all Balance ."
            );
          }
        } else {
          console.log(
            "Invalid Password!! please Enter Your Correct Password\n"
          );
          console.log("=============================================\n");
        }
      }
      break;
    default:
      console.log("Invalid Choice................!!");
      console.log("=============================================\n");
  }
}
