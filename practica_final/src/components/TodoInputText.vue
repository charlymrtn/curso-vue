<template>
    <div>
        <input type="text" :value="value" v-on="listeners" placeholder="new Todo">
    </div>
</template>

<script>

export default {
    name: 'TodoInputText',
    props: {
        value: {
            type: String,
            default: ""
        }
    },
    data(){
        return {
            text1: "",
        }
    },
    computed: {
        listeners(){
            return {
                ...this.$listeners, input: event => this.$emit('input',event.target.value)
            }
        }
    },
}
</script>