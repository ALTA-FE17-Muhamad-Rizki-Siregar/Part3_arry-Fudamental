function joinArrayRemoveDuplicate(arrayA: any[], arrayB: any[]): any[] {
    // Combine the arrays and remove duplicates
    const combinedArray = [...new Set([...arrayA, ...arrayB])];
  
    return combinedArray;
  }
  
  // Test cases
  console.log(joinArrayRemoveDuplicate(["apel", "anggur"], ["lemon", "leci", "nanas"]));
  // Output: ["apel", "anggur", "lemon", "leci", "nanas"]
  
  console.log(joinArrayRemoveDuplicate(["samsung", "apple"], ["apple", "sony", "xiaomi"]));
  // Output: ["samsung", "apple", "sony", "xiaomi"]
  
  console.log(joinArrayRemoveDuplicate(["football", "basketball"], ["basketball", "football"]));
  // Output: ["football", "basketball"]
  
  