function calculateDiscount() {
    let amount = parseFloat(prompt("Enter Shopping Amount:"));
    let discount = 0;

    if (amount >= 100 && amount <= 500) {
        discount = amount * 0.10;
    } else if (amount > 500) {
        discount = amount * 0.15;
    }

    let finalAmount = amount - discount;

    console.log("Shopping Amount: $" + amount.toFixed(2));
    console.log("Discount: $" + discount.toFixed(2));
    console.log("Final Amount to Pay: $" + finalAmount.toFixed(2));
}

calculateDiscount();