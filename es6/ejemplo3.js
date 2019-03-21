class Polygon {

    constructor(altura, ancho){
        this.name = 'Poligono';
        this.altura = altura;
        this.ancho = ancho;
    }

    sayName(){
        console.log('hola soy un',this.name);
    }

    sayMessage(){
        console.log('poligono proviene de polus muchos y gonia angulos');
    }

    static convertCentimetersToInches(cm){
        console.log(cm+' centimetros es equivalente a '+cm*0.39370+' pulgadas');
    }
}

class Square extends Polygon {
    
    constructor(longitud){
        super(longitud,longitud);
        this.name= 'cuadrado';
    }

    get area(){
        return this.altura * this.ancho;
    }

    set side(value){
        this.altura = value;
        this.ancho= value;
    }

    sayMessage(){
        console.log('los cuadrados son perfectos.');
        super.sayMessage();
    }
}

let p = new Polygon(300,400);
p.sayName();
let s = new Square(5);
console.log('el area total es '+s.area);
s.sayMessage();
s.side = 10;
console.log('el area total es '+s.area);
Polygon.convertCentimetersToInches(170);