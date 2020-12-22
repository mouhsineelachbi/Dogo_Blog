<template>
  <div class="home">
      <h1> Home </h1>
      <h2> Refs </h2>
      <p> {{ meOne.name }} - {{ meOne.age }}</p>
      <button @click="updateMeOne">Update One</button>
      <h2>Reactive</h2>
      <p> {{ meTwo.name }} - {{ meTwo.age }}</p>
      <button @click="updateMeTwo">Update Two</button>
      
  </div>
</template>

<script>
import { reactive, ref } from 'vue';


export default {
  name: 'Home',
  setup () {

    let meOne = ref({ name: 'Mouhsine', age: 25 }); // work better for external composition functions cz thy're retain reactivity when exposed
    let meTwo = reactive({ name: 'Mythose', age: 25 }); // reactive doesn't work with primitive value like reactive('mouhsine') or reactive(1)
    
    function updateMeOne () {
      meOne.value.age = Math.floor(Math.random()*100);
    }

    function updateMeTwo () {
      meTwo.age = Math.floor(Math.random()*100);
    }    

    return { meOne, updateMeOne, meTwo, updateMeTwo }
  }
}
</script>
