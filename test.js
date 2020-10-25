const uwuifier = require('./index.js');

const strings = [
    'woa such uwu'
]

console.log('Do these strings look uwuified?');

for (const str of strings) {
    console.log(new uwuifier.uwuifier().uwuify(str));
}