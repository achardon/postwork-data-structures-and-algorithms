function recursiveCount(num = 0) {
  //print num
  console.log(num)

  //increase num by 1
  num = ++num
  
  // return if num is > 9
  if (num > 9) {
    return
  }

  //function calls itself
  recursiveCount(num)
}

// recursiveCount(5);

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
