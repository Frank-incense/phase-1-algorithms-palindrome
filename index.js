function isPalindrome(word) {
  // Write your algorithm here
  let s = word.length-1
  for (let i = 0; i < word.length; i++){
    if (word[i] !== word[s]){
      return false
    }
    s--
  }
  return true
}

/* 
  Add your pseudocode here
*/
// we have a word
// iterate over the word 
// Check whether the character at this position
// matches a character in the same reverse position of the word
// true if it matches and false if it does not
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
