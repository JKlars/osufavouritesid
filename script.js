const fs = require('fs');

let arr = new Array();

let element = fs.readFileSync('element.txt', 'utf8');

arr = element.split('b.ppy.sh/preview/');

for(var i = 0; i < arr.length; i++) {

    arr[i] = arr[i].substring(0, arr[i].indexOf('.'));

}

arr.shift();

console.log(arr);

let data = arr.toString();

fs.writeFile("data.txt", data, (err) => {

    if (err) {

        console.error(err);

        return;

      }

    });