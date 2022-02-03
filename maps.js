// const firstMap = new Map();
// firstMap.set(7, 'seven');
// firstMap.set('7', 'seven string');

// firstMap.get(7)

// //MAP Methods (new, set, get, has )
// const add = (x,y) => x + y;
// const mult = (x,y) => x * y;

// const funcCalls = new Map();
// funcCalls.set(add, 1);
// funcCalls.set(mult, 9);

// funcCalls.get(add);
// //Passing an array through Map

// const bandData = [
//     [3, '3 Doors Down'],
// ['three', 'Three Dog Night'],
// ['nine', 'Nine Inch Nails'],
// ['four', 'The Four Seasons'],
// [41, 'Sum 41']
// ];

// const bandMap = new Map(bandData);
// // bandMap.get(3); //'3DoorsDown
// // bandMap.has(41);
// // bandMap.size
// // bandMap.delete
// // bandMap.clear() will erase all data in map
// //iterators
// bandMap.keys() shows keys of data
// bandMap.values()
// bandMap.entries()
// //Looping with Maps using forEach or for..of loops
// bandMap.forEach((val, key) =>{
//     console.log(key + '=>' + val);
// });

// //for of loop will turn each key and value into it's own array
// for (let [key, value] of bandMap){
//     console.log(key, '=', value)
// }

// //SETS
const bannedHashTags = new Set(['no filter', 'justsaying', 'winning', 'yolo']);
bannedHashTags.add('bestlife').add('selfie');
bannedHashTags.has('yolo');
bannedHashTags.delete('')
bannedHashTags.clear()
function filterHashTags(tags){
    return tags.filter((tag) => !bannedHashTags.has(tag))
}

const susansTags = ['','','','']
filterHashTags(susansTags);