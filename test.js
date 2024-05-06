const {
    binarySearch,
    sumOfArray,
    findMax,
    findMin,
    removeDuplicates,
    productOfArray,
    isArraySorted,
    removeValueFromArray,
    calculateDifference,
    countOccurrences
  } = require('./index'); 
  // Test data
  const array = [1, 2, 3, 4, 5];
  const target = 3;
  
  //  binarySearch
  console.log('Binary Search:', binarySearch(array, target)); // Should return 2
  
  //  sumOfArray
  console.log('Sum of Array:', sumOfArray(array)); // Should return 15
  
  // findMax and findMin
  console.log('Max:', findMax(array)); // Should return 5
  console.log('Min:', findMin(array)); // Should return 1
  
  // removeDuplicates
  console.log('Remove Duplicates:', removeDuplicates([1, 2, 2, 3, 3, 4])); // Should return [1, 2, 3, 4]

  