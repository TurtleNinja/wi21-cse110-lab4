for (const car in statistics) {
    if (car.startsWith('r') || statistics[car] % 2 === 1) {
        console.log(statistics[car]);
    }
}