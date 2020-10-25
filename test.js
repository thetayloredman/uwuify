const uwuifier = require('./index.js');

const strings = [
    'woa such uwu',
    'uwuification test',
    'I like pizza a lot. It\'s good!',
    'This is the national test of thr uwuification system.'
]

console.log('Do these strings look uwuified?');

for (const str of strings) {
    console.log(new uwuifier().uwuify(str));
}