
let Loan = parseFloat(prompt("Enter the Loan Amount:"));

if (Loan <= 10000) {
    interest = Loan * 0.05;
} else if (hours <= 50000) {
    interest = Loan * 0.04;
} else {
    interest = Loan * 0.035;
}

let totalAmount = Loan + interest;

console.log("Loan Amount: $" + Loan.toFixed(2));
console.log("Interest: $" + interest.toFixed(2));
console.log("Total Amount to Pay: $" + totalAmount.toFixed(2));

