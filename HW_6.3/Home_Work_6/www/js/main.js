checkAnagram = (arg1, arg2) => {
let anagram1 = arg1.toLowerCase().split('');
let anagram2 = arg2.toLowerCase().split('');

anagram1.sort();
anagram2.sort();

if (anagram1.length !== anagram2.length) {
    return false;
    } else {
        for(let i = 0; i < anagram1.length; i++) {
            if (anagram1[i] !== anagram2[i]) {
                return false;
            };
        } return true;
    };
};

console.log(checkAnagram("sLeEp", "speel")); // true
console.log(checkAnagram("dwor", "dwir"));  // false
console.log(checkAnagram("dwor", "word"));  //true
console.log(checkAnagram("Hi", "Bye"));     // false