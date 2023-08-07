<template>
  <div>
    <button @click="plus"> + </button>
    {{ counter }}
    <button @click="minus"> - </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

  const counter = ref(0);
  const plus = () => {
    counter.value++
  }
  const minus = () => {
    counter.value--
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
