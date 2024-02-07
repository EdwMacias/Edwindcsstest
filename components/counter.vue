
<script setup>
import { useCounterStore } from '~/stores/counter';
const store = useCounterStore()
const {name,count, doubleCount, nameUppercase} = storeToRefs(store)
const {increment, reverseName } = store


</script>

<template>
    <div>
    counter
    <p>nombre: {{ name }}</p>
    <p>contador: {{ count }}</p>
    <p>contador doble: {{ doubleCount }}</p>
    <p>nombre en mayusculas: {{ nameUppercase }}</p>
    <hr>
    <button @click="increment">suma</button>
    <button @click="reverseName"> nombre al revés</button>
    </div>
</template>

<style scoped>

</style>