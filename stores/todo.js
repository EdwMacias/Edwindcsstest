import {defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
    state: () => ({
        todoList: [{id: 0, task: "demo"}],
        id: 0
    }),
    actions: {
        addTodo(task) {
            const date = new Date();
            const newTask = {
                id:this.id++,
                task,
                completed: false,
                date
            }
            this.todoList.push(newTask)
        }
    }
})