import { defineStore} from "pinia";

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        name: "Edwar",
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
        nameUppercase: (state) => state.name.toUpperCase(),
    },
    actions: {
        increment() {
            this.count++
        },
        reverseName() {
            const reverse = this.name.split('').reverse().join('')
            this.name = reverse
        }
    },
})