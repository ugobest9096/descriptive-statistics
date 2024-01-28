class Statistics {
    constructor(data) {
        this.data = data;
    }

    // Measures of central tendency
    get mean() {
        return this.data.reduce((sum, value) => sum + value, 0) / this.data.length;
    }

    get median() {
        const sortedData = [...this.data].sort((a, b) => a - b);
        const middle = Math.floor(sortedData.length / 2);
        return sortedData.length % 2 === 0
            ? (sortedData[middle - 1] + sortedData[middle]) / 2
            : sortedData[middle];
    }

    get mode() {
        const counts = {};
        let maxCount = 0;
        let mode = null;

        for (const value of this.data) {
            counts[value] = (counts[value] || 0) + 1;
            if (counts[value] > maxCount) {
                maxCount = counts[value];
                mode = value;
            }
        }

        return mode;
    }

    // Measures of variability
    get range() {
        return Math.max(...this.data) - Math.min(...this.data);
    }

    get variance() {
        const mean = this.mean;
        const squaredDeviations = this.data.map(value => Math.pow(value - mean, 2));
        return squaredDeviations.reduce((sum, squaredDeviation) => sum + squaredDeviation, 0) / this.data.length;
    }

    get standardDeviation() {
        return Math.sqrt(this.variance);
    }
}

// Usage example
const numbers = [1, 4, 2, 5, 3];
const stats = new Statistics(numbers);
console.log("Mean:", stats.mean);
console.log("Median:", stats.median);
console.log("Mode:", stats.mode);
console.log("Range:", stats.range);
console.log("Variance:", stats.variance);
console.log("Standard Deviation:", stats.standardDeviation);