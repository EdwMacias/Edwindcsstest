import { defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: "Edwar",
    }),
    actions: {
        increment() {
            this.count++
        }
    },
})