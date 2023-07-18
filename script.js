function findDistinctSum(set1, set2) {
    let distinctElements = [];
    let seenElements = new Set();
  
    for (let element of set1) {
      if (!seenElements.has(element)) {
        distinctElements.push(element);
        seenElements.add(element);
      }
    }
  
    for (let element of set2) {
      if (!seenElements.has(element)) {
        distinctElements.push(element);
        seenElements.add(element);
      }
    }
  
    let sum = distinctElements.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }
  
  // Example usage:
  let set1 = [3, 1, 7, 9];
  let set2 = [2, 4, 1, 9, 3];
  console.log(findDistinctSum(set1, set2)); // Output: 13

  
  function dotProduct(v1, v2) {
    let dotProduct = 0;
    for (let i = 0; i < v1.length; i++) {
      dotProduct += v1[i] * v2[i];
    }
    return dotProduct;
  }
  
  function checkOrthogonality() {
    let n = parseInt(prompt("Enter the number of vector pairs:"));
  
    for (let i = 0; i < n; i++) {
      let v1 = prompt("Enter vector v1 (space-separated values):").split(" ").map(Number);
      let v2 = prompt("Enter vector v2 (space-separated values):").split(" ").map(Number);
  
      let product = dotProduct(v1, v2);
      if (product === 0) {
        console.log("Orthogonal");
      } else {
        console.log("Not orthogonal");
      }
    }
  }
  
  // Example usage:
  checkOrthogonality();
  