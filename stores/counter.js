import { defineStore} from "pinia";

export const useCounterStore = defineStore( "counter", ()=>{
    const count = ref(0)
    const name = ref("Edwar")
    const doubleCount = computed(() => count.value * 2)
    const nameUppercase = computed(() => name.value.toUpperCase())
    function increment(){
        count.value++
    }
    function reverseName(){
        const reverse = name.value.split('').reverse().join('')
        name.value = reverse
    }
    return {count, name, increment, reverseName, doubleCount, nameUppercase}
})

// export const useCounterStore = defineStore('counter', {
//     state: () => ({
//         count: 0,
//         name: "Edwar",
//     }),
//     getters: {
//         doubleCount: (state) => state.count * 2,
//         nameUppercase: (state) => state.name.toUpperCase(),
//     },
//     actions: {
//         increment() {
//             this.count++
//         },
//         reverseName() {
//             const reverse = this.name.split('').reverse().join('')
//             this.name = reverse
//         }
//     },
// })