const n = 5; // Rows for the top half

// Upper half including the middle row
for (let i = 1; i <= n; i++) {
    let row = "";
    
    // Leading spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    
    // First star
    row += "*";
    
    // Inner spaces and second star
    if (i > 1) {
        for (let j = 1; j <= 2 * i - 3; j++) {
            row += " ";
        }
        row += "*";
    }
    console.log(row);
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
    let row = "";
    
    // Leading spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }
    
    // First star
    row += "*";
    
    // Inner spaces and second star
    if (i > 1) {
        for (let j = 1; j <= 2 * i - 3; j++) {
            row += " ";
        }
        row += "*";
    }
    console.log(row);
}
