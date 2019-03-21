var app = new Vue({
    el: '#app',
    data:{
        message: 'Hola perro',
        name: 'Carlos',
        city: 'CDMX',
        numberOfThings: 3,
        daysOfTheWeek: [
            'lunes',
            'martes',
            'miercoles',
            'jueves',
            'viernes',
            'sabado',
            'domingo'
        ],
        airports: [
            {code: 'MID', city: 'Merida', country: 'Mexico'},
            {code: 'LAD', city: 'Los Angeles', country: 'USA'},
            {code: 'MTL', city: 'Montreal', country: 'Canada'},
            {code: 'MEX', city: 'Ciudad de Mexico', country: 'Mexico'},
            {code: 'NYC', city: 'Nueva York', country: 'USA'}
        ]
    },
    methods: {
        showDataMounted(){
            console.log(this.name);
            console.log(this.city);
        },
        numberOfSomething(number,something){
            return `yo tengo ${number} de ${something}`;
        },
        showAlert(texto){
            alert(texto);
        },
        showAlert2(event){
            console.log(event);
            alert(event.target.tagName);
        }
    },
    mounted() {
        this.showDataMounted();
    },
    computed: {
        thing(){
            if(this.numberOfThings != 1){
                return 's';
            }
        }
    },
});