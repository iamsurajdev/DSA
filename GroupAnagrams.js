const strings = ["eat","tea","tan","ate","nat","bat"];

var groupAnagrams = function(strs) {
        const map = {};

    for (let word of strs) {
        // create the signature by sorting the characters
        const key = word.split("").sort().join("");

        // if this signature doesn't exist yet, create an empty array
        if (!map[key]) {
            map[key] = [];
        }

        // add the word to its group
        map[key].push(word);
    }

    // return all the groups
    return Object.values(map);
};

console.log(groupAnagrams(strings))