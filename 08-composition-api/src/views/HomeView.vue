<template>
  <div class="home">
    <h1>Reactive vs Ref</h1>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  setup() {
    const ironMan = ref({name: tony, age: 50});
    const hulk = ref({name: 'Bruce', age: 50});

    return {
      ironMan,
      hulk,
      changeIronMan: () => {
        ironMan.value
      }
    }

  }
}
</script>
