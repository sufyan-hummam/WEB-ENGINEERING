const calculateSalary = (experience) => {
    let bonus = 0;
    if (experience > 5) {
        bonus = 500;
    }
    return experience * 1000 + bonus;
};

let experience = parseInt(prompt("Enter your years of experience:"));

if (experience >= 0) {
    let totalSalary = calculateSalary(experience);
    console.log("Years of Experience: " + experience);
    console.log("Total Salary: $" + totalSalary);
} else {
    console.log("Please enter a valid number of years.");
}