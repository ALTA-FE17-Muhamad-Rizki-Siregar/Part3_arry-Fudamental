function removeDuplicates(inputArray: number[]) {
    if (inputArray.length === 0) {
      return 0;
    }
  
    let nonDuplicateIndex = 0;
  
    for (let i = 1; i < inputArray.length; i++) {
      if (inputArray[i] !== inputArray[nonDuplicateIndex]) {
        nonDuplicateIndex++;
        inputArray[nonDuplicateIndex] = inputArray[i];
      }
    }
  
    return nonDuplicateIndex + 1;
  }
  
  // Test cases
  console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]));    // 4
  console.log(removeDuplicates([2, 3, 4, 5, 6, 9, 9]));    // 6
  console.log(removeDuplicates([2, 2, 2, 11]));            // 2
  console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4, 4])); // 4
  console.log(removeDuplicates([1, 2, 3, 11, 11]));       // 4
  