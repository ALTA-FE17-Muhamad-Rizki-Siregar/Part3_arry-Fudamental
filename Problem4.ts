function meanMedian(arrayInput: number[]): { mean: number; median: number } {
    const sum = arrayInput.reduce((acc: number, num: number) => acc + num, 0);
    const mean = sum / arrayInput.length;
  
    const sortedArray = [...arrayInput].sort((a, b) => a - b);
    const mid = Math.floor(sortedArray.length / 2);
    const median =
      sortedArray.length % 2 === 0
        ? (sortedArray[mid - 1] + sortedArray[mid]) / 2
        : sortedArray[mid];
  
    return { mean, median };
  }
  
  // Test case
  console.log(meanMedian([1, 2, 3, 4, 5]));
  // Output: { mean: 3, median: 3 }
  