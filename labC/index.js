const shared = {
    count: 0
}
  
shared.install = function(){
    Object.defineProperty(Vue.prototype, '$myGlobal', {
        get () { return shared }
    })
}

Vue.use(shared);

Vue.component('todo-item',{
    template: '<li>this is a todo item</li>'
});

Vue.component('button-counter',{
    data: function(){
        return {
            contador : 0
        }
    },
    props: ['title'],
    template: `<button @click="contador++">{{title}}, presioname para sumar {{contador}}, contador global {{$myGlobal.count++}}</button>`
});

var app = new Vue({
    el: '#app',
    data: {
        titles: [
            {
                id: 1,
                msg: 'BA'
            },
            {
                id: 2,
                msg: 'BB'
            },
            {
                id: 3,
                msg: 'BC'
            },
        ]
    }
});