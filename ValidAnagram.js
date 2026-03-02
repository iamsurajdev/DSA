const word1 = "raac";
const word2 = "caat";


var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = {}

    for (const i of s) {
        count[i] = (count[i] || 0 ) + 1;
    }

    for (const i of t) {
        if (!count[i]) {
            return false;
        }
        count[i] = count[i] - 1
    }

    return true;
};


console.log(isAnagram(word1, word2))