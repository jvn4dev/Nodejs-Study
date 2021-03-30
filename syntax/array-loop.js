var arr = [1,2,3,4,5,6,7,8,9,10];
var i = 0;
var total = 0;

while (i < arr.length){
    total += arr[i];
    i += 1;
    console.log('i =' + i);
}
console.log(`total = ${total}`);