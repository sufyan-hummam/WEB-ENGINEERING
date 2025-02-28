function formatEmployeeName() {
    let name = prompt("Enter employee name:");
    console.log("Uppercase:", name.toUpperCase());
    console.log("Lowercase:", name.toLowerCase());
    console.log("Hyphenated:", name.replace(/\s+/g, "-"));
    console.log("First 3 Letters:", name.substring(0, 3));
}
formatEmployeeName();