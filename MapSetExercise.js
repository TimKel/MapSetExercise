1,2,3,4

'ref'

//What does the Map m look like after running the following code?
0: {Array(3) => true}
1: {Array(3) => false}
  
//Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length

//Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
  return "aeiou".includes(char);
}

function vowelCount(str){
  const vowelMap = new Map();
  for(let char of str){
    let lowerCaseChar = char.toLowerCase()
    if(isVowel(lowerCaseChar)){
      if(vowelMap.has(lowerCaseChar)){
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
      } else {
        vowelMap.set(lowerCaseChar, 1);
      }
    }
  }
  return vowelMap;
}