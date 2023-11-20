<template>
    <div>
    counter
    <p>{{ name }}</p>
    <p>{{ count }}</p>
    <hr>
    <el-button @click="increment" class="">suma</el-button>
    </div>
</template>

<script setup>
import { useCounterStore } from '~/stores/counter';
const store = useCounterStore()
const {name,count} = storeToRefs(store)
const {increment} = store
</script>

<style scoped>

</style>