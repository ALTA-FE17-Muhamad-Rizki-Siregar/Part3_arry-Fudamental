function compareString(a: string, b: string) {
    let result = "";
  
    // Iterate through each substring of string A
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j <= a.length; j++) {
        let substring = a.slice(i, j);
  
        // Check if the substring is present in string B
        if (b.includes(substring) && substring.length > result.length) {
          result = substring;
        }
      }
    }
  
    return result;
  }
  
  // Test cases
  console.log(compareString("AKA", "AKASHI"));     // AKA
  console.log(compareString("KANGAROO", "KANG"));  // KANG
  console.log(compareString("KI", "KIJANG"));      // KI
  console.log(compareString("KUPU-KUPU", "KUPU")); // KUPU
  console.log(compareString("ILALANG", "ILA"));    // ILA
  