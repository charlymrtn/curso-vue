const math3 = {
    async theAnswer(){ return 10 },
    *tenInts(){
        for(let i=0;i<4;i++){
            yield i;
        }
    }
}

console.log('math3 la respuesta '+math3.theAnswer());

var numbers=math3.tenInts();
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

var promise = math3.theAnswer().then(v=>{
    console.log(v);
})

const NAME ='nombre';

obj = {
    [NAME]: 'javier morales',
    ["prop_"+(()=>42)()]:42
}

console.log('nombre: '+obj[NAME]);
console.log('prop: '+obj['prop_42']);

console.log('simple string');
var name = 'carlos', time = 'today';

console.log(`hello ${name}, how are you ${time}`);
console.log('')

