
    let hours = +prompt("Enter the number of hours parked (or 0 to stop):");
    // if (hours === 0) break;

    let VIP = confirm("Are you a VIP customer?");
    let fee = 0;

    if (hours <= 2) {
        fee = hours * 5;
    } else if (hours <= 5) {
        fee = hours * 4;
    } else {
        fee = hours * 3;
    }

    if (VIP) {
        fee *= 0.8;
    }

    console.log(`Hours parked: ${hours}`);
    console.log(`VIP customer?${VIP ? "Yes" : "No"}`);
    console.log(`Total Fee: ${fee.toFixed(2)}`);

