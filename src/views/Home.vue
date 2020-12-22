<template>
  <div class="home">
      Home
      <p ref="p">Hello my name is {{ name }} and I'm {{ age }} years old</p>
      <button @click="handleClick">Click me</button>
      <input type="text" name="name" id="name" v-model="name">
      <button @click="age++">Increment Age</button>
  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'Home',
  setup () {
    const name = ref('Mouhsine')
    const age = ref(25);

    //  Creating a ref to the paragraphe in the template
    // let p = ref(null);

    function handleClick () {
      name.value = 'Not Mouhsine';
      age.value = 99;
    }

    return {  name, age,  handleClick }
  }
}
</script>
