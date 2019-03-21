<template>
    <div>
        <h1 class="ui center aligned header">{{ heading }}</h1>
        <div class="ui container">
            <input v-model="text1" placeholder="edita texto">
            <p> el texto es {{text1}}</p>

            <table v-show="employees.length > 0" class="ui cell table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th @click="sortBy = 'firstName'">Nombre</th>
                        <th @click="sortBy = 'lastName'">Apellido</th>
                        <th @click="sortBy = 'email'">Correo</th>
                        <th @click="sortBy = 'phone'">Telefono</th>
                        <th @click="sortBy = 'department'">Departamento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(emp, index) in sortedEmployees" :key="index">
                        <td><img :src="emp.photoUrl" class="ui mini rounded image"></td>
                        <td>{{emp.firstName}}</td>
                        <td>{{emp.lastName}}</td>
                        <td>{{emp.email}}</td>
                        <td>{{emp.phone}}</td>
                        <td>{{emp.department}}</td>
                    </tr>
                </tbody>
            </table>
            <span v-show="employees.length == 0">no hay empleados</span>

        </div>
    </div> 
</template>

<script>
    export default {
    name: 'Employees',
    data(){
        return {
            heading: 'Staff Directory',
            sortBy: 'department',
            text1: "Welcome !!",
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
        }
    },
    methods: {
        sorted(filtro){
            this.sortBy = filtro;
            this.sortedEmployees;
        }
    },
    mounted() {
        this.sortedEmployees;
    },
    computed: {
        sortedEmployees() {
            return this.employees.sort((a,b) => a[this.sortBy].localeCompare(b[this.sortBy]));
        }
    },
}
</script>
