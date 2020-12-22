<template>
  <div class="home">
      <h1> Home </h1>
      <input type="text" v-model="search">
      <p> searched term -  {{ search }}</p>

      <div v-for="name in matching" :key="name">
        {{ name }}
      </div>
      
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';


export default {
  name: 'Home',
  setup () {

    let search = ref('');

    let names = ref(['Mouhsine', 'java', 'python', 'javascript', 'Math', 'physics'])

    let matching = computed( () => {
      return names.value.filter( name => {
        return name.includes(search.value);

      })
    })

    return {  search, names, matching }
  }
}
</script>
