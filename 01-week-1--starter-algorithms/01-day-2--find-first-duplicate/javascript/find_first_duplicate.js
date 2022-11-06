function findFirstDuplicate(arr) {
  let duplicate = false
  //iterate through array
  for (let i = 0; i < arr.length - 1; i++) {
    //for each number, check to see if number exists before
    const currentNumber = arr[i]
    indexOfDuplicate = arr.indexOf(currentNumber)
    //if exists, print number
    if(indexOfDuplicate < i) {
      console.log(arr[indexOfDuplicate])
      duplicate = true
      break;
    }
    //if there is never a duplicate, print -1
  }
  if (duplicate === false) {
    console.log(-1)
  }
}

findFirstDuplicate([2, 1, 3, 3, 2]);
findFirstDuplicate([1, 2, 3, 4]);
findFirstDuplicate([5,6,7,8,7,6,5,4])

// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: 3");
//   console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

//   console.log("");

//   console.log("Expecting: -1");
//   console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
// }

// module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
