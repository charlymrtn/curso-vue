var cliente = {
    _nombre: 'Carlos',
    _amigos: ['oscar','mario','chava','diego','edgar'],
    imprimirAmigos(){
        this._amigos.forEach(v=>console.log(this._nombre+" conoce a "+v));
    }
};

cliente.imprimirAmigos();

function square(){
    let example = () => {
        let numbers = [];
        for(let number of arguments){
            numbers.push(number * number);
        }
        return numbers;
    }

    return example();
}

var resultado = square(2,34,56,1,67);

console.log(resultado);