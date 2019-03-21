<template>
    <div>
        <h1 class="ui center aligned header">{{ heading }}</h1>
        <div class="ui container">
            <TodoInputText 
            v-model="newTodoText"
            @keydown.enter="addTodo"/>
            <ul v-if="tasks.length">
                <TodoItem 
                v-for="task in tasks"
                :key="task.id"
                :todo="task"
                @remove="removeTodo"/>
            </ul>
            <p v-else>no hay elementos</p>
        </div>
    </div>
</template>

<script>
import TodoInputText from './TodoInputText.vue'
import TodoItem from './TodoItem.vue'

let nextTodoId = 1

export default {
    name: 'TodoList',
    components: {
        TodoInputText,
        TodoItem
    },
    data(){
        return {
            heading: 'TodoList with Vue js',
            tasks: [
                {
                    "id": nextTodoId++,
                    "content": "Learn Vue",
                },
                {
                    "id": nextTodoId++,
                    "content": "Fall in love",
                },
                {
                    "id": nextTodoId++,
                    "content": "Task 2",
                },
            ],
            newTodoText: '',
        }
    },
    methods: {
        removeTodo(id){
            this.tasks = this.tasks.filter(task => {
                return task.id != id
            });
        },
        addTodo(){
            const trim = this.newTodoText.trim();
            if(trim){
                this.tasks.push({id: nextTodoId++,content: trim});
                this.newTodoText = '';
            }
        }
    }
}
</script>