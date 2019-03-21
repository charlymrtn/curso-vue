<template>
    <div>
        <span>{{todo.content}}</span>
        <button @click="$emit('remove',todo.id)">X</button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}
</script>
