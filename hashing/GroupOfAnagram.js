function groupAnagrams(anagrams) {
    let obj = {};
    for (let i = 0; i < anagrams.length; i++) {
        let sortedAnagram = anagrams[i].split("").sort().join("");
        if (obj[sortedAnagram]) {
            obj[sortedAnagram].push(anagrams[i]);
        } else {
            obj[sortedAnagram] = [anagrams[i]];
        }
        //obj[sortedAnagram] ? obj[sortedAnagram].push(anagrams[i]) : obj[sortedAnagram] = [anagrams[i]];
    }
    return Object.values(obj);
}


let anagrams = ["ear", "bat", "are", "code", "era", "tab"];

console.log(groupAnagrams(anagrams));