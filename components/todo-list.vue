<script setup>
    import  { useTodoStore } from "~/stores/todo";
    const store = useTodoStore()
</script>
<template>
    <ul>
        <li v-for="todo in store.todoList" :key="`todo-item${todo.id}`"> {{ todo.task }}</li>
    </ul>
</template>


<style scoped>

</style>