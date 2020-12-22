<template>
  <div class="home">
      <h1> Home </h1>
      <h2>{{  age   }}</h2>
      
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';


export default {
  name: 'Home',
  setup () {
    // use computed values
    let age = computed(() => {
      return Math.floor(Math.random()*100000);
    })

    return {  age }
  }
}
</script>
