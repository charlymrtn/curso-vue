var x=20, y=10;

point1={
    x:x, y:y
}
console.log('point1 ',point1.x + ' '+point1.y);
point2 = {x,y};
console.log('point2 ',point2.x + ' '+point2.y);

var math1 = {
    add: function(a,b){
        return a+b;
    }
}

const math2 = {
    add(a,b) {
        return a+b;
    }
}

console.log('math1',math1.add(1,2));
console.log('math2',math2.add(11,52));