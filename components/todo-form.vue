<template>
<form @submit.prevent="addNewTask" >
    <input type="text" v-model="task">
    <button class="">add</button>
</form>
</template>

<script setup>
import { useTodoStore } from "~/stores/todo";
const store = useTodoStore();
const task = ref();

function addNewTask() {
    if(task.value.trim().lenght === 0) {
        return
    }
    store.addTodo(task.value.trim())
    task.value = ''
}

</script>

<style scoped>

</style>