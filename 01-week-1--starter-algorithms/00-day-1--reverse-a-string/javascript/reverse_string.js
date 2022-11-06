function reverseString(str) {

  //split string into array of characters
  const array = str.split("")
  console.log(array)

  //find length of array
  length = array.length
  console.log(length)

  //iterate through array, add last character as first character of new string

  newString = ""
  for (let i = length - 1; i >= 0; i--) {
    newString = newString + array[i];
  }

  console.log(newString)
  
  //return string
  return newString
}

reverseString("alessandra");

// if (require.main === module) {
//   // add your own tests in here
//   console.log("Expecting: 'ih'");
//   console.log("=>", reverseString("hi"));

//   console.log("");

//   console.log("Expecting: 'ybabtac'");
//   console.log("=>", reverseString("catbaby"));
// }

// module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
