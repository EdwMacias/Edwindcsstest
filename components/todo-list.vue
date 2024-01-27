<script setup>
    import  { useTodoStore } from "~/stores/todo";
    const store = useTodoStore()
</script>
<template>
    <ul>
        <template v-for="todo in store.todoList" :key="`todo-item${todo.id}`">
            <TodoListItem ></TodoListItem>
        </template>
    </ul>
</template>


<style scoped>

</style>