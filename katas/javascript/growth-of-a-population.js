function nbYear(p0, percent, aug, p) {
    let current = p0;
    let yearPassed = 0;

    while (current < p) {
        current += (current * percent / 100) + aug;
        yearPassed++;
    }

    return yearPassed;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);