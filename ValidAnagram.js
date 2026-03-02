const word1 = "raac";
const word2 = "caat";

var isAnagram = function (s, t) {
  //checking if length is same
  if (s.length !== t.length) {
    return false;
  }

  const count = {}; // taking an empty object

  for (const i of s) {
    count[i] = (count[i] || 0) + 1; // storing the letter with the number of occurrence
  }

  for (const i of t) {
    // checking if the letter exists or not
    if (!count[i]) {
      return false;
    }
    count[i] = count[i] - 1; // if the letter exists then reduce the number of occurrence
  }

  return true;
};

console.log(isAnagram(word1, word2));
