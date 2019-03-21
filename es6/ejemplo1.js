//arrow functions

var materiales = [
    'm1','m2','m3'
];

var pares = [2,4,6,8];
var impares = pares.map(v => v+1);
var fives=[];

impares.forEach(v=>{
    if(v % 5 === 0)
        fives.push(v);
});

console.log('impares: '+ impares);
console.log('fives: '+ fives);