const a1 = [1,2,3,4,5,6,7,6,5,4,3];
const set1 = Array.from(new Set(a1));
console.log(set1);
//tried wrapping the functin here
const output = (function hasDuplicate() {
    if (set1.length !== a1.length)
        return true;
    else
        return false;
})();
console.log(output);
//output:[
//   1, 2, 3, 4,
//   5, 6, 7
// ]
// true
