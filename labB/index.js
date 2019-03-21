var app = new Vue({
    el: '#app',
    data:{
        heading: 'Staff Directory',
        sortBy: 'department',
        text1: "Welcome !!",
        // message: 'Hola perro',
        // name: 'Carlos',
        // city: 'CDMX',
        // numberOfThings: 3,
        // daysOfTheWeek: [
        //     'lunes',
        //     'martes',
        //     'miercoles',
        //     'jueves',
        //     'viernes',
        //     'sabado',
        //     'domingo'
        // ],
        // airports: [
        //     {code: 'MID', city: 'Merida', country: 'Mexico'},
        //     {code: 'LAD', city: 'Los Angeles', country: 'USA'},
        //     {code: 'MTL', city: 'Montreal', country: 'Canada'},
        //     {code: 'MEX', city: 'Ciudad de Mexico', country: 'Mexico'},
        //     {code: 'NYC', city: 'Nueva York', country: 'USA'}
        // ],
        employees: [
          
            {
                "firstName": "camelia",
                "lastName": "la texana",
                "photoUrl": "https://randomuser.me/api/portraits/thumb/women/79.jpg",
                "email": "bobbie.murphy@example.com",
                "phone": "(925)-667-7604",
                "department": "Management"
            },
            {
                "firstName": "raymix",
                "lastName": "san jose el vidrio",
                "photoUrl": "https://randomuser.me/api/portraits/thumb/women/9.jpg",
                "email": "amelia.austin@example.com",
                "phone": "(651)-507-3705",
                "department": "Engineering"
            },
            {
                "firstName": "kristin",
                "lastName": "terry",
                "photoUrl": "https://randomuser.me/api/portraits/thumb/women/45.jpg",
                "email": "kristin.terry@example.com",
                "phone": "(021)-544-1184",
                "department": "Sales"
            }
        ]
    },
    methods: {

        sorted(filtro){
            this.sortBy = filtro;
            this.sortedEmployees;
        }
        // showDataMounted(){
        //     console.log(this.name);
        //     console.log(this.city);
        // },
        // numberOfSomething(number,something){
        //     return `yo tengo ${number} de ${something}`;
        // },
        // showAlert(texto){
        //     alert(texto);
        // },
        // showAlert2(event){
        //     console.log(event);
        //     alert(event.target.tagName);
        // }
    },
    mounted() {
        //this.showDataMounted();
        this.sortedEmployees;
    },
    computed: {
        // thing(){
        //     if(this.numberOfThings != 1){
        //         return 's';
        //     }
        // },
        sortedEmployees() {
            return this.employees.sort((a,b) => a[this.sortBy].localeCompare(b[this.sortBy]));
        }
    },
});